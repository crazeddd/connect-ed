import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <main>
            <Navbar />
            <section id="about" class="">
                <div class="grid col py-2 g-4 b-all r-2 justify-center">
                    <div class="flex col g-3 p-5 justify-center">
                        <h5>About Us</h5>
                        <img src="/banner text.png" alt="Banner Image" id="banner-image"></img>
                        <p>is a student-run organization that helps introduce elementary students in the Round Rock area to the world of coding. We go to schools and provide hands-on activities and workshops to engage students in learning. Founded in 2024 we have taught hundreds of students and helped them discover their passion for technology.</p>
                        <small class="txt-muted">- The Connected{"{ed}"} team</small>
                    </div>
                    <div class="p-5">
                        <img src="/logo.png" alt="Logo"></img>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}