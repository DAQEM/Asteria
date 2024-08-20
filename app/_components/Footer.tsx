import Image from "next/image";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiBisecthosting, SiCurseforge, SiModrinth } from "react-icons/si";
import DiscountBanner from "./DiscountBanner";

const Footer = () => {
    return (
        <>
            <footer className="footer bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Projects</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Server List</a>
                </nav>
                <nav>
                    <h6 className="footer-title">DAQEM Studios</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <DiscountBanner showIcons={true} r="WebsiteFooter" />
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <div className="h-10 aspect-[1600/771]">
                        <Image
                            src="/images/logo/daqem_studios.png"
                            width={1600}
                            height={771}
                            alt="DAQEM Logo"
                        />
                    </div>
                    <p>
                        <span>DAQEM Studios</span>
                        <br />
                        Creating mods and modpacks since 2020.
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://x.com/DaqEmYT">
                            <FaXTwitter className="size-7" />
                        </a>
                        <a href="https://www.youtube.com/@daqem">
                            <FaYoutube className="size-7" />
                        </a>
                        <a href="https://www.curseforge.com/members/daqem/projects">
                            <SiCurseforge className="size-7" />
                        </a>
                        <a href="https://modrinth.com/user/DAQEM">
                            <SiModrinth className="size-7" />
                        </a>
                        <a href="https://bisecthosting.com/DAQEM?r=WebsiteFooterIcon">
                            <SiBisecthosting className="size-7" />
                        </a>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;
