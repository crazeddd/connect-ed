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
                    <a href="/plans">Schedule</a>
                    <a href="/panel">More</a>
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
                <div class="modal">
                    <div class="content flex col b-all r-2">
                        <div class="flex justify-between items-center">
                            <a href="/">
                                <h5>Connect(ed)</h5>
                            </a>
                            <button onclick={() => setShowModal(false)} class="p-0">
                                <i class="fa-solid fa-xmark fa-xl"></i>
                            </button>
                        </div>
                        <hr />
                        <a href="/about">About</a>
                        <a href="/plans">Plans</a>
                        <a href="/devlog">Devlog</a>
                        <a href="https://status.kibihost.com/status/main" target="_blank">
                            Status
                        </a>

                        <div class="flex col g-3">
                            <a class="button outline" href="/auth/signup">
                                Sign Up
                            </a>
                            <a class="button outline" href="/auth/login">
                                Login
                            </a>
                            <a
                                href="https://discord.gg/QYXGpwSxFH"
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
