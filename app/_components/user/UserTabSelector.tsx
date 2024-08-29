"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const UserTabSelector = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleChange(tab: string) {
        const params = new URLSearchParams(searchParams);
        params.set("tab", tab);
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex gap-2 relative bg-neutral rounded-full w-max">
            <input
                className="btn btn-ghost w-24 z-20 checked:!bg-transparent checked:!border-none !border-none peer/projects-tab transition-all duration-500"
                type="radio"
                name="tab"
                aria-label="Projects"
                defaultChecked={searchParams.get("tab") === "projects" || !searchParams.get("tab")}
                onChange={() => handleChange("projects")}
            />
            <input
                className="btn btn-ghost w-24 z-20 checked:!bg-transparent checked:!border-none !border-none peer/blogs-tab transition-all duration-500"
                type="radio"
                name="tab"
                aria-label="Blogs"
                defaultChecked={searchParams.get("tab") === "blogs"}
                onChange={() => handleChange("blogs")}
            />
            <input
                className="btn btn-ghost w-24 z-20 checked:!bg-transparent checked:!border-none !border-none peer/servers-tab transition-all duration-500"
                type="radio"
                name="tab"
                aria-label="Servers"
                defaultChecked={searchParams.get("tab") === "servers"}
                onChange={() => handleChange("servers")}
            />
            <div className="w-24 h-12 rounded-full z-10 bg-primary-gradient absolute transition-all duration-500 peer-checked/blogs-tab:ml-[6.5rem] peer-checked/servers-tab:ml-[13rem]" />
        </div>
    );
};

export default UserTabSelector;
