import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"

export default function Success() {
    return (
        <main>
            <Navbar />
            <section id="success" class="flex align-center justify-center py-2">
                <div class="card flex col g-3 items-center justify-center">
                    <h1>Application Submitted!</h1>
                    <p class="txt-muted">Thank you for applying to Connect{"{ed}"}. We will review your application and get back to you soon.</p>
                </div>
            </section>
            <Footer />
        </main>
    )
}