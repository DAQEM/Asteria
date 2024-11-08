"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdCategory, MdFrontLoader, MdTypeSpecimen } from "react-icons/md";
import Filters from "../input/Filters";

const ProjectFilters = ({ categories }: { categories: Category[] }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function clearFilters() {
        const checkboxes: HTMLInputElement[] = document.querySelectorAll(
            "#project-filters input[type=checkbox]"
        ) as any;

        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });

        const params = new URLSearchParams(searchParams);
        params.delete("types");
        params.delete("loaders");
        params.delete("categories");
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div id="project-filters" className="grid gap-4">
            <button className="btn btn-neutral w-full" onClick={clearFilters}>
                Clear Filters
            </button>
            <div>
                <span className="flex items-center gap-2">
                    <MdTypeSpecimen /> Types
                </span>
                <Filters
                    searchParam="types"
                    options={[
                        {
                            value: "mod",
                            label: "Mod",
                        },
                        {
                            value: "modpack",
                            label: "Modpack",
                        },
                        {
                            value: "plugin",
                            label: "Plugin",
                        },
                    ]}
                />
            </div>
            <div>
                <span className="flex items-center gap-2">
                    <MdFrontLoader />
                    Loaders
                </span>
                <Filters
                    searchParam="loaders"
                    options={[
                        {
                            value: "forge",
                            label: "Forge",
                        },
                        {
                            value: "fabric",
                            label: "Fabric",
                        },
                        {
                            value: "neoforge",
                            label: "NeoForge",
                        },
                        {
                            value: "quilt",
                            label: "Quilt",
                        },
                    ]}
                />
            </div>
            <div>
                <span className="flex items-center gap-2">
                    <MdCategory />
                    Categories
                </span>
                <Filters
                    searchParam="categories"
                    options={categories.map((category) => ({
                        value: category.slug,
                        label: category.name,
                    }))}
                />
            </div>
        </div>
    );
};

export default ProjectFilters;
