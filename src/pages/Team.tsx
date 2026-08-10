import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Team() {
    return (
        <main>
            <Navbar />
            <section id="hero" class="grid col py-2 g-4">
                <div class="flex col g-3 b-all r-3 p-4 justify-center">
                    <h5>Meet the Team</h5>
                    <p>2026-2027 Officer Team TBD. Apply now to join!</p>
                </div>
            </section>
            <Footer />
        </main>
    )
}