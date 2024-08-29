import { headers } from "next/headers";
import Image from "next/image";
import { FaCog } from "react-icons/fa";
import { FaArrowRightToBracket, FaDiscord, FaUser } from "react-icons/fa6";
import DiscountBanner from "./DiscountBanner";
import HeaderLinks from "./HeaderLinks";
import LoginModal from "./modal/LoginModal";
import ModalButton from "./modal/ModalButton";

const Header = () => {
    const headersList = headers();
    let user: User | null = null;
    if (headersList.has("x-user")) {
        user = JSON.parse(headersList.get("x-user") as string) as User;
    }

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
                    <a href="/" className="h-12 aspect-[1600/771]">
                        {/* Small screen logo */}
                        <Image
                            className="lg:hidden block"
                            src="/images/logo/daqem_studios.png"
                            width={1600}
                            height={771}
                            alt="DAQEM Logo"
                        />

                        {/* Large screen logo */}
                        <Image
                            className="lg:block hidden"
                            src="/images/logo/daqem_studios.png"
                            width={1600}
                            height={771}
                            alt="DAQEM Logo"
                        />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <HeaderLinks />
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    {user ? (
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
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
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
                                <li>
                                    <a href="/settings/profile">
                                        <FaCog className="size-4" />
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a href="/logout">
                                        <FaArrowRightToBracket className="size-4" />
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <ModalButton
                            targetId="login-modal"
                            className="btn btn-primary w-12 h-12 p-0"
                        >
                            <FaUser className="size-5" />
                        </ModalButton>
                    )}
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
