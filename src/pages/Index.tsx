import { createSignal } from 'solid-js'
import { useNavigate } from '@solidjs/router'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function App() {
  const [dismissed, setDismissed] = createSignal(localStorage.getItem('bannerDismissed') === 'true');
  const navigate = useNavigate();

  const dismissBanner = () => {
    setDismissed(true);
    localStorage.setItem('bannerDismissed', 'true');
  };


  return (
    <main>
      <Navbar />
      {!dismissed() && (
        <section id="banner">
          <div class="flex justify-between items-center w-100 bg-secondary txt-center py-2 px-3 r-5 ">
            <i class="fa-solid fa-info-circle"></i>
            <p>Applications now open for the 2026-2027 school year!</p>
            <i style="cursor: pointer;" class="fa-solid fa-xmark" onclick={dismissBanner}></i>
          </div>
        </section>
      )}
      <section id="hero" class="grid col py-5 g-4">
        <div class="flex col g-4 items-start justify-center">
          <div class="flex g-3 txt-muted">
            <a href="https://www.instagram.com/connect.ed/" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a href="https://discord.com/invite/XSPZ43Pmwe" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-discord fa-lg"></i>
            </a>
          </div>
          <h1>Help introduce students <br /> to the world of programming.</h1>
          <p>Teaching students in the Round Rock area since 2024.</p>
          <div class="flex row g-3">
            <button class="button primary" onClick={() => navigate('/apply')}>Apply Now</button>
            <button class="button outline" onClick={() => navigate('/about')}>Learn More</button>
          </div>
        </div>
        <div class="flex col g-3 justify-center desktop-only">
          <div class="flex col g-2 r-3">
            <img class="r-3" src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          </div>
        </div>
      </section>
      <section id="coerce" class="flex col g-4 py-5 bg-light">
        <h2>A few benefits of joining</h2>
        <div class="flex g-4 items-start justify-center mobile-wrap">
          <div class="card fill bg-default">
            <h5>Get Volunteer Hours</h5>
            <p class="muted">Earn volunteer hours to go towards your community service requirements or college applications.</p>
          </div>
          <div class="card fill bg-default">
            <h5>Learn to Code</h5>
            <p class="muted">Dont know how to code? Thats okay, we teach you the basics so you can start as soon as possible.</p>
          </div>
          <div class="card fill bg-default">
            <h5>Make a Difference</h5>
            <p class="muted">Contribute to your local Austin community by teaching students about technology and coding.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default App;