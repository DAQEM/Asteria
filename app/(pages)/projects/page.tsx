import BodyContainer from "@/app/_components/BodyContainer";
import Pagination from "@/app/_components/Pagination";
import ProjectCard from "@/app/_components/project/ProjectCard";
import ProjectFilters from "@/app/_components/project/ProjectFilters";
import { Metadata } from "next";
import { FaFilter, FaMagnifyingGlass } from "react-icons/fa6";

export const metadata: Metadata = {
    title: "Our Unique Projects - DAQEM Studios",
    description:
        "DAQEM Studios offers a variety of unique projects, ranging from Minecraft mods to modpacks. Explore our projects and discover the latest innovations.",
};

export default function Page() {
    return (
        <BodyContainer>
            <div className="mt-6 breadcrumbs text-sm">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>Projects</li>
                </ul>
            </div>
            <div
                id="projects"
                className="group/projects my-12 grid lg:grid-cols-[20rem,1fr] gap-4"
            >
                <aside
                    id="sidebar"
                    className="row-start-2 lg:col-start-1 lg:row-start-1 lg:row-span-3 simple-card h-max group-has-[#filter-toggle:checked]/projects:hidden lg:!block"
                >
                    <ProjectFilters />
                </aside>
                <section className="contents">
                    <div id="controls" className="row-start-1 lg:col-start-2">
                        <div className="w-full simple-card">
                            <div className="lg:flex grid grid-rows-3 w-full gap-4">
                                <div className="flex gap-4 grow">
                                    <div className="lg:hidden relative btn w-max !rounded-lg bg-base-100 light-border !border font-normal text-base">
                                        <input
                                            id="filter-toggle"
                                            type="checkbox"
                                            className="absolute w-full h-full appearance-none opacity-0"
                                        />
                                        <FaFilter />
                                        Filters
                                    </div>
                                    <label className="input input-bordered flex items-center gap-2 grow">
                                        <FaMagnifyingGlass className="size-4" />
                                        <input
                                            type="text"
                                            className="grow w-full"
                                            placeholder="Search"
                                        />
                                    </label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div>Sort by</div>
                                    <select className="select select-bordered grow">
                                        <option>Latest</option>
                                        <option>Oldest</option>
                                        <option>Popular</option>
                                        <option>Alphabetical</option>
                                    </select>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div>Projects per page</div>
                                    <select className="select select-bordered grow">
                                        <option>5</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>50</option>
                                        <option>100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="pagination-top"
                        className="row-start-3 group-has-[#filter-toggle:checked]/projects:row-start-2 lg:col-start-2 lg:row-start-2 flex w-full justify-center"
                    >
                        <Pagination
                            page={2}
                            maxPage={13}
                            urlCreator={(page: number): string =>
                                `/projects/page/${page}`
                            }
                        />
                    </div>
                    <div
                        id="content"
                        className="row-start-4 group-has-[#filter-toggle:checked]/projects:row-start-3 lg:col-start-2 lg:row-start-3"
                    >
                        <div className="grid gap-4">
                            {(new Array(10).fill(0) as number[]).map((_, i) => (
                                <ProjectCard key={i} />
                            ))}
                        </div>
                    </div>
                    <div
                        id="pagination-bottom"
                        className="row-start-5 group-has-[#filter-toggle:checked]/projects:row-start-4 lg:col-start-2 lg:row-start-4 flex w-full justify-center"
                    >
                        <Pagination
                            page={2}
                            maxPage={13}
                            urlCreator={(page: number): string =>
                                `/projects/page/${page}`
                            }
                        />
                    </div>
                </section>
                <div></div>
            </div>
        </BodyContainer>
    );
}
