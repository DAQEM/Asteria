import SidebarNavigationLayout from "@/app/_components/nav/SidebarNavigationLayout";
import { BsGridFill } from "react-icons/bs";
import { FaList, FaNewspaper } from "react-icons/fa6";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarNavigationLayout
            defaultPath="/dashboard"
            sections={[
                {
                    title: "Dashboard",
                    links: [
                        {
                            title: "Overview",
                            icon: <BsGridFill className="size-4" />,
                            href: "/dashboard",
                        },
                    ],
                },
                {
                    title: "Creators",
                    links: [
                        {
                            title: "Projects",
                            icon: <FaList className="size-4" />,
                            href: "/dashboard/projects",
                            requiresRoles: ["creator"],
                        },
                        {
                            title: "Blogs",
                            icon: <FaNewspaper className="size-4" />,
                            href: "/dashboard/blogs",
                            requiresRoles: ["creator"],
                        },
                    ],
                },
            ]}
        >
            {children}
        </SidebarNavigationLayout>
    );
}
