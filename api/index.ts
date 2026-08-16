import { Hono } from "hono";
import { cors } from "hono/cors";
import { google } from "googleapis";

const app = new Hono();

app.use(
    "*",
    cors({
        origin: [...process.env.CORS_ORIGINS!.split(",")],
    })
);

async function validateTurnstile(token, remoteip) {
    try {
        const response = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    secret: SECRET_KEY,
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
    const data = await c.req.json();

    const verified = await validateTurnstile(data.captchaToken, c.req.headers.get("x-forwarded-for") || c.req.headers.get("remote-addr"));

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
            body: JSON.stringify(data),
        }
    );

    if (!response.ok) {
        return c.json({
            success: false,
            error: "Failed to submit application",
        }, 500);
    }

    return c.json({
        success: true,
    });
});

app.get("/", (c) => {
    return c.text("hi");
});

export default {
    port: Number(process.env.PORT ?? 8001),
    fetch: app.fetch,
};