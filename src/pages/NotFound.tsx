import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function NotFound() {
    return (
        <main>
            <Navbar />
            <section id="hero" class="grid col py-5 g-4">
                <div class="flex col g-3 items-center justify-center">
                    <h1>404</h1>
                    <p>Page not found.</p>

                    <a href="/" class="button primary">Go Home</a>

                </div>
            </section>
            <Footer />
        </main>
    )
}