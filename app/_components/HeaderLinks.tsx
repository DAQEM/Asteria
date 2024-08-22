"use server";

import { headers } from "next/headers";

const HeaderLinks = () => {
    const headersList = headers();
    const url = headersList.get("x-pathname") || "";
    const url_selected_class =
        "text-white font-medium bg-primary-gradient rounded-full";

    return (
        <>
            <li>
                <a href="/" className={url === "/" ? url_selected_class : ""}>
                    Home
                </a>
            </li>
            <li>
                <a
                    href="/projects"
                    className={url === "/projects" ? url_selected_class : ""}
                >
                    Projects
                </a>
            </li>
            <li>
                <a
                    href="/blog"
                    className={url === "/blog" ? url_selected_class : ""}
                >
                    Blog
                </a>
            </li>
            <li>
                <a
                    href="/servers"
                    className={url === "/servers" ? url_selected_class : ""}
                >
                    Server List
                </a>
            </li>
        </>
    );
};

export default HeaderLinks;
