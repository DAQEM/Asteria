import HeadersHandler from "@/app/_lib/server/headerHandler";
import { redirect } from "next/navigation";

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
    sections,
    defaultPath,
}) => {
    const pathname = HeadersHandler.getPathname();
    const user = HeadersHandler.getUser();
    const urlSelectedClass = "!btn-primary";

    if (!isUserAllowed(sections, user, pathname)) redirect(defaultPath);

    const renderLink = (link: SidebarNavigationLink, index: number) => {
        if (link.requiresAuth && !user) return null;
        if (
            link.requiresRoles &&
            (!user ||
                (user && !hasRequiredRole(link.requiresRoles, user.roles)))
        )
            return null;

        return (
            <a
                key={index}
                href={link.href}
                className={`btn btn-ghost text-base mt-1 w-full justify-start !h-10 !min-h-0 ${
                    pathname === link.href ? urlSelectedClass : ""
                }`}
            >
                {link.icon}
                {link.title}
            </a>
        );
    };

    const renderSection = (
        section: SidebarNavigationSection,
        index: number
    ) => {
        if (section.requiresAuth && !user) return null;
        if (
            section.requiresRoles &&
            (!user ||
                (user && !hasRequiredRole(section.requiresRoles, user.roles)))
        ) {
            return null;
        }

        const links = section.links.map(renderLink).filter((link) => link);

        if (!links.length) return null;

        return (
            <nav key={index} className="mb-4">
                <ul>
                    {index === 0 ? (
                        <h1 className="text-3xl font-semibold mb-3">
                            <span>{section.title}</span>
                        </h1>
                    ) : (
                        <h2 className="text-xl font-semibold mb-1">
                            <span>{section.title}</span>
                        </h2>
                    )}
                    {links}
                </ul>
            </nav>
        );
    };

    return (
        <aside className="simple-card h-max">
            {sections.map(renderSection)}
        </aside>
    );
};

export default SidebarNavigation;

export type SidebarNavigationProps = {
    sections: SidebarNavigationSection[];
    defaultPath: string;
};

export type SidebarNavigationSection = {
    title: string;
    links: SidebarNavigationLink[];
    requiresAuth?: boolean;
    requiresRoles?: string[];
};

export type SidebarNavigationLink = {
    title: string;
    icon: React.ReactNode;
    href: string;
    requiresAuth?: boolean;
    requiresRoles?: string[];
};

export const isUserAllowed = (
    sections: SidebarNavigationSection[],
    user: User | null,
    pathname: string | null
): boolean => {
    return sections.some((section) => {
        const link = section.links.find((link) => link.href === pathname);

        if (!link) return false;

        const requiresAuth = section.requiresAuth || link.requiresAuth;
        if (requiresAuth && !user) {
            return false;
        }

        if (
            section.requiresRoles &&
            (!user ||
                (user && !hasRequiredRole(section.requiresRoles, user.roles)))
        ) {
            return false;
        }

        if (
            link.requiresRoles &&
            (!user ||
                (user && !hasRequiredRole(link.requiresRoles, user.roles)))
        ) {
            return false;
        }

        return true;
    });
};

const hasRequiredRole = (
    requiredRoles: string[],
    userRoles: string[]
): boolean => {
    return requiredRoles.some((role) => userRoles.includes(role));
};
