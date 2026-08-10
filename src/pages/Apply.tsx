import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function Apply() {
    const handleSubmit = (event: Event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }
    return (
        <main>
            <Navbar />
            <section id="hero" class="flex align-center justify-center py-5">
                <form class="card" onSubmit={handleSubmit}>
                    <h1>Apply</h1>
                    <p>Please fill out the info below.</p>
                    <div class="flex col g-2">
                        <label for="name">Full Name</label>
                        <input id="name" name="name" required></input>
                    </div>
                    <div class="flex col g-2">
                        <label for="email">Personal Email</label>
                        <input id="email" name="email" type="email" required></input>
                    </div>
                    <div class="flex col g-2">
                        <label for="school">School</label>
                        <input id="school" name="school" required></input>
                    </div>
                    <div class="flex col g-2">
                        <label for="grade">Grade</label>
                        <select id="grade" name="grade" required>
                            <option value="" disabled selected>Select your grade</option>
                            <option value="9">9th</option>
                            <option value="10">10th</option>
                            <option value="11">11th</option>
                            <option value="12">12th</option>
                        </select>
                    </div>
                    <div class="flex col g-2">
                        <label for="experience">Experience with coding (optional)</label>
                        <textarea id="experience" name="experience"></textarea>
                    </div>
                    <button type="submit" class="button primary">Submit Application</button>
                </form>
            </section>
            <Footer />
        </main>
    )
};