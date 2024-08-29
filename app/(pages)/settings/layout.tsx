import BodyContainer from "@/app/_components/BodyContainer";
import { headers } from "next/headers";
import { FaPaintBrush } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

export default function Layout({ children }: { children: React.ReactNode }) {
    const headersList = headers();
    const pathname = headersList.get("x-pathname") || "";
    const url_selected_class = "text-white bg-neutral";
    const user: User | null = JSON.parse(headersList.get("x-user") || "null");

    return (
        <BodyContainer>
            <div className="my-4">
                <h1 className="text-3xl font-semibold">
                    <span>Settings</span>
                </h1>
            </div>
            <div className="grid lg:grid-cols-[20rem,1fr] gap-4 mb-4 lg:min-h-[50vh]">
                <aside className="simple-card h-max">
                    <nav>
                        <ul>
                            <h2 className="text-lg font-semibold">
                                <span>DAQEM Studios</span>
                            </h2>
                            <a
                                href="/settings"
                                className={
                                    "flex items-center gap-2 mt-1 ml-2 btn btn-ghost w-max text-base " +
                                    (pathname === "/settings"
                                        ? url_selected_class
                                        : "")
                                }
                            >
                                <FaPaintBrush />
                                Appearance
                            </a>
                            {user && (
                                <>
                                    <h2 className="text-lg font-semibold mt-4">
                                        <span>Account</span>
                                    </h2>
                                    <a
                                        href="/settings/profile"
                                        className={
                                            "flex items-center gap-2 mt-1 ml-2 btn btn-ghost w-max text-base " +
                                            (pathname === "/settings/profile"
                                                ? url_selected_class
                                                : "")
                                        }
                                    >
                                        <FaUser />
                                        Profile
                                    </a>
                                </>
                            )}
                        </ul>
                    </nav>
                </aside>
                <div className="h-max">{children}</div>
            </div>
        </BodyContainer>
    );
}
