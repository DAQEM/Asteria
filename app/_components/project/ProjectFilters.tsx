"use client";

import { MdCategory, MdFrontLoader, MdTypeSpecimen } from "react-icons/md";
import Filters from "../Filters";

const ProjectFilters = () => {
    function clearFilters() {
        const checkboxes: HTMLInputElement[] = document.querySelectorAll(
            "#project-filters input[type=checkbox]"
        ) as any;

        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
            checkbox.dispatchEvent(new Event("change"));
        });
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
                    options={[
                        {
                            value: "adventure",
                            label: "Adventure",
                        },
                        {
                            value: "survival",
                            label: "Survival",
                        },
                        {
                            value: "mini-game",
                            label: "Mini-Game",
                        },
                        {
                            value: "utility",
                            label: "Utility",
                        },
                        {
                            value: "roleplay",
                            label: "Roleplay",
                        },
                        {
                            value: "other",
                            label: "Other",
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default ProjectFilters;
