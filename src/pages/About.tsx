import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function About() {
    return (
        <main>
            <Navbar />
            <section id="hero" class="grid col py-5 g-4">
                <div class="flex col g-3 items-center justify-center">
                    <h1>About</h1>
                    <p>Connect{"{ed}"} is a student-run organization that aims to connect students with opportunities in the tech industry. We provide resources, mentorship, and networking events to help students succeed in their careers.</p>
                </div>
            </section>
            <Footer />
        </main>
    )
}