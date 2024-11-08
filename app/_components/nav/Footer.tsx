import Image from "next/image";
import { FaCog } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiBisecthosting, SiCurseforge, SiModrinth } from "react-icons/si";
import BodyContainer from "../BodyContainer";
import DiscountBanner from "../DiscountBanner";

const Footer = () => {
    return (
        <BodyContainer type="full" className="!p-0">
            <footer className="bg-base-200">
                <div className="footer text-base-content p-10 mt-24 max-w-7xl mx-auto !grid-cols-[1fr,1fr] lg:!grid-cols-[1fr,1fr,1fr,max-content]">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a href="/projects" className="link link-hover">
                            Projects
                        </a>
                        <a href="/blog" className="link link-hover">
                            Blog
                        </a>
                        <a href="/servers" className="link link-hover">
                            Server List
                        </a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">DAQEM Studios</h6>
                        <a href="/about" className="link link-hover">
                            About us
                        </a>
                        <a href="/contact" className="link link-hover">
                            Contact
                        </a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a href="/legal/terms" className="link link-hover">
                            Terms of use
                        </a>
                        <a href="/legal/privacy" className="link link-hover">
                            Privacy policy
                        </a>
                        <a href="/legal/cookie" className="link link-hover">
                            Cookie policy
                        </a>
                    </nav>
                    <div className="w-max">
                        <a href="/settings" className="btn btn-sm btn-neutral">
                            <FaCog />
                            Settings
                        </a>
                    </div>
                </div>
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
        </BodyContainer>
    );
};

export default Footer;
