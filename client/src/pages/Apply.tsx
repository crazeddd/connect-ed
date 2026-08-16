import { createSignal } from "solid-js"
import { useNavigate } from "@solidjs/router";
import { useForm } from "../utils/useForm";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Turnstile from "../components/Turnstile";
import Toaster from "../components/Toaster";
import { toast } from "../components/toast";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Apply() {
    const navigate = useNavigate();
    const [canDrive, setCanDrive] = createSignal(false);
    const [loading, setLoading] = createSignal(false);
    const [captchaToken, setCaptchaToken] = createSignal("");

    const { handleChange, form } = useForm({
        name: '',
        email: '',
        school: '',
        grade: '',
        experience: ''
    });

    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("https://connect-ed.kibihost.com/applications", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...form, captchaToken: captchaToken(), canDrive: canDrive() }),
            })

            const data = await res.json();

            if (data.success) {
                navigate("/success");
            } else {
                toast("An error occurred while submitting your application.", "error");
            }
        } catch (error) {
            console.error("Error submitting application:", error);
            toast("Uh oh, an unexpected error has occurred.", "error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Toaster />
            <main>
                <Navbar />
                <section id="apply" class="flex align-center justify-center py-2">
                    <form class="card" onSubmit={handleSubmit}>
                        <div class="flex col g-3 items-center justify-center">
                            <h1>Apply</h1>
                            <p>Please fill out the info below.</p>
                        </div>
                        <div class="flex col g-3">
                            <div class="flex col g-2">
                                <label for="name">Full Name</label>
                                <input id="name" name="name" onChange={handleChange} value={form.name} required></input>
                            </div>
                            <div class="flex col g-2">
                                <label for="email">Personal Email</label>
                                <input id="email" name="email" type="email" onChange={handleChange} value={form.email} required></input>
                            </div>
                            <div class="flex col g-2">
                                <label for="school">School</label>
                                <input id="school" name="school" onChange={handleChange} value={form.school} required></input>
                            </div>
                            <div class="flex col g-2">
                                <label for="grade">Grade</label>
                                <select id="grade" name="grade" onChange={handleChange} value={form.grade} required>
                                    <option value="" disabled selected>Select your grade</option>
                                    <option value="9">9th</option>
                                    <option value="10">10th</option>
                                    <option value="11">11th</option>
                                    <option value="12">12th</option>
                                </select>
                            </div>
                            <div class="flex col g-2">
                                <label for="experience">Experience with coding (optional)</label>
                                <textarea id="experience" name="experience" onChange={handleChange} value={form.experience}></textarea>
                            </div>
                        </div>
                        <div class="flex g-2 items-center">
                            <input type="checkbox" id="canDrive" name="canDrive" onChange={(e) => setCanDrive(e.currentTarget.checked)} checked={canDrive()}></input>
                            <label for="canDrive">Can you drive yourself to events? (leave unchecked if no)</label>
                        </div>
                        <p class="txt-muted">*Please note that this application is for HS students near or in the Round Rock area only.</p>
                        <Turnstile onVerify={(token) => setCaptchaToken(token)} />
                        <button type="submit" class="button primary">{loading() ? <LoadingSpinner /> : "Submit Application"}</button>
                        <small class="txt-muted">Contact us at <span class="txt-bold">connectedwhs@gmail.com</span> for more information.</small>
                    </form>
                </section>
                <Footer />
            </main>
        </>
    )
};