import SidebarNavigationLayout from "@/app/_components/nav/SidebarNavigationLayout";
import { FaPaintBrush } from "react-icons/fa";
import { FaLink, FaUser } from "react-icons/fa6";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarNavigationLayout
            defaultPath="/settings"
            sections={[
                {
                    title: "Settings",
                    links: [
                        {
                            title: "Appearance",
                            icon: <FaPaintBrush className="size-4" />,
                            href: "/settings",
                        },
                    ],
                },
                {
                    title: "Account",
                    links: [
                        {
                            title: "Profile",
                            icon: <FaUser className="size-4" />,
                            href: "/settings/profile",
                        },
                        {
                            title: "Sessions",
                            icon: <FaLink className="size-4" />,
                            href: "/settings/sessions",
                        },
                    ],
                    requiresAuth: true,
                },
            ]}
        >
            {children}
        </SidebarNavigationLayout>
    );
}
