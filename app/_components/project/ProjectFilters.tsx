"use client";

import { MdCategory, MdFrontLoader, MdTypeSpecimen } from "react-icons/md";
import ProjectFilterCheckbox from "./ProjectFilterCheckbox";

const ProjectFilters = () => {
    function clearFilters() {
        const checkboxes: HTMLInputElement[] = document.querySelectorAll(
            "#project-filters input[type=checkbox]"
        ) as any;

        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
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
                <ProjectFilterCheckbox>Mod</ProjectFilterCheckbox>
                <ProjectFilterCheckbox>Modpack</ProjectFilterCheckbox>
                <ProjectFilterCheckbox>Plugin</ProjectFilterCheckbox>
            </div>
            <div>
                <span className="flex items-center gap-2">
                    <MdFrontLoader />
                    Loaders
                </span>
                <ProjectFilterCheckbox>Forge</ProjectFilterCheckbox>
                <ProjectFilterCheckbox>Fabric</ProjectFilterCheckbox>
                <ProjectFilterCheckbox>Spigot</ProjectFilterCheckbox>
            </div>
            <div>
                <span className="flex items-center gap-2">
                    <MdCategory />
                    Categories
                </span>
                <ProjectFilterCheckbox>Adventure</ProjectFilterCheckbox>
                <ProjectFilterCheckbox>Survival</ProjectFilterCheckbox>
                <ProjectFilterCheckbox>Mini-Game</ProjectFilterCheckbox>
                <ProjectFilterCheckbox>Utility</ProjectFilterCheckbox>
                <ProjectFilterCheckbox>Roleplay</ProjectFilterCheckbox>
                <ProjectFilterCheckbox>Other</ProjectFilterCheckbox>
            </div>
        </div>
    );
};

export default ProjectFilters;
