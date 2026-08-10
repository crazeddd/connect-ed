import { createSignal } from "solid-js";

export default function Navbar() {
    const [showModal, setShowModal] = createSignal(false);

    return (
        <>
            <nav class="flex justify-between items-center">
                <div class="flex g-2 items-center">
                    <img src="/logo.png" alt="Connect-4 Logo" />
                    <a href="/">
                        <h5>Connect{"{ed}"}</h5>
                    </a>
                </div>
                <div class="flex g-5 txt-muted desktop-only">
                    <a href="/about">About</a>
                    <a href="/schedule">Schedule</a>
                    <a href="/team">Team</a>
                </div>
                <div class="flex g-1 desktop-only">
                    <a href="/apply" class="button primary">
                        Join Now
                    </a>
                </div>
                <div class="mobile-only">
                    <button onclick={() => setShowModal(true)} class="p-0">
                        <i class="fa-solid fa-bars fa-lg"></i>
                    </button>
                </div>
            </nav>
            {showModal() && (
                <div class="modal bg-default">
                    <div class="content flex col b-all r-2">
                        <div class="flex justify-between items-center">
                            <a href="/">
                                <h5>Connect{"{ed}"}</h5>
                            </a>
                            <button onclick={() => setShowModal(false)} class="p-0">
                                <i class="fa-solid fa-xmark fa-xl"></i>
                            </button>
                        </div>
                        <hr />
                        <a href="/about">About</a>
                        <a href="/schedule">Schedule</a>
                        <a href="/team">Team</a>

                        <div class="flex col g-3">
                            <a class="button primary" href="/apply">
                                Apply
                            </a>
                            <a
                                href="https://discord.com/invite/XSPZ43Pmwe"
                                target="_blank"
                                class="button outline"
                            >
                                Discord <i class="fa-brands fa-discord"></i>
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
