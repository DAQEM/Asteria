import Image from "next/image";
import { BsGridFill } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
import { FaArrowRightToBracket, FaDiscord, FaUser } from "react-icons/fa6";
import { match } from "ts-pattern";
import URLHandler from "../../_lib/common/urlHandler";
import HeadersHandler from "../../_lib/server/headerHandler";
import DiscountBanner from "../DiscountBanner";
import DAQEMLogo from "../icon/DAQEMLogo";
import LoginModal from "../modal/LoginModal";
import ModalButton from "../modal/ModalButton";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
    const pathname: string | null = HeadersHandler.getPathname();
    const user: User | null = HeadersHandler.getUser();

    return (
        <header className="grid grid-rows-[max-content,5rem] bg-base-100">
            <DiscountBanner r="WebsiteHeader" />
            <nav className="navbar max-w-7xl mx-auto px-4 py-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
                        >
                            <HeaderLinks />
                        </ul>
                    </div>
                    <a href="/">
                        <div className="w-36 h-12">
                            <DAQEMLogo />
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <HeaderLinks />
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    {match(user)
                        .with(null, () => (
                            <ModalButton
                                targetId="login-modal"
                                className="btn btn-primary w-12 h-12 p-0"
                            >
                                <FaUser className="size-5" />
                            </ModalButton>
                        ))
                        .otherwise((user) => (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn w-12 h-12 p-0 avatar"
                                >
                                    <div className="w-12 rounded-full">
                                        <Image
                                            src={user.image}
                                            width={48}
                                            height={48}
                                            alt="User Avatar"
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu simple-card rounded-box z-[1] p-2 shadow"
                                >
                                    <li className="menu-title">
                                        <p>
                                            <span>{user.name}</span>
                                        </p>
                                        <p className="text-base-content font-normal">
                                            {user.email}
                                        </p>
                                        <hr className="mt-4 border-base-300" />
                                    </li>
                                    <li>
                                        <a href={"/users/" + user.name}>
                                            <FaUser className="size-4" />
                                            View Profile
                                        </a>
                                    </li>
                                    {user.roles.includes("creator") && (
                                        <li>
                                            <a href="/dashboard">
                                                <BsGridFill className="size-4" />
                                                Dashboard
                                            </a>
                                        </li>
                                    )}
                                    <li>
                                        <a href="/settings/profile">
                                            <FaCog className="size-4" />
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={
                                                "/auth/logout?returnUrl=" +
                                                URLHandler.getAsteriaURL() +
                                                pathname
                                            }
                                        >
                                            <FaArrowRightToBracket className="size-4" />
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    <a
                        href="https://daqem.com/discord"
                        target="_blank"
                        className="btn btn-primary w-12 h-12 p-0"
                    >
                        <FaDiscord className="size-6" />
                    </a>
                </div>
            </nav>
            <LoginModal />
        </header>
    );
};

export default Header;
