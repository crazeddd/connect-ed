import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
    "*",
    cors({
        origin: process.env.CORS_ORIGIN,
    })
);

async function validateTurnstile(token: string, remoteip: string) {
    try {
        const response = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    secret: process.env.TURNSTILE_SECRET_KEY,
                    response: token,
                    remoteip: remoteip,
                }),
            },
        );

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Turnstile validation error:", error);
        return { success: false, "error-codes": ["internal-error"] };
    }
}

app.post("/applications", async (c) => {
    try {
        const {
            name,
            email,
            school,
            grade,
            canDrive,
            experience,
            captchaToken,
        } = await c.req.json();

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof school !== "string" ||
            typeof grade !== "string" ||
            typeof canDrive !== "boolean" ||
            typeof experience !== "string" ||
            typeof captchaToken !== "string"
        ) {
            return c.json({
                success: false,
                error: "Invalid application data",
            }, 400);
        }

        // Verify Turnstile
        const verified = await validateTurnstile(
            captchaToken,
            c.req.header("CF-Connecting-IP") as string
        );

        if (!verified.success) {
            return c.json({
                success: false,
                error: "Captcha verification failed",
            }, 400);
        }

        const response = await fetch(
            process.env.GOOGLE_SCRIPT_URL!,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    school,
                    grade,
                    canDrive,
                    experience,
                }),
            }
        );

        if (!response.ok) {
            console.error(
                "Google Apps Script returned:",
                response.status,
                await response.text()
            );

            return c.json({
                success: false,
                error: "Failed to submit application",
            }, 500);
        }

        return c.json({
            success: true,
        });
    } catch (error) {
        console.error("Application submission error:", error);

        return c.json({
            success: false,
            error: "Invalid request",
        }, 400);
    }
});

app.get("/", (c) => {
    return c.text("hi");
});

export default {
    port: Number(process.env.PORT ?? 8001),
    fetch: app.fetch,
};