import BodyContainer from "@/app/_components/BodyContainer";
import Pagination from "@/app/_components/Pagination";
import ProjectCard from "@/app/_components/project/ProjectCard";
import ProjectFilters from "@/app/_components/project/ProjectFilters";
import Search from "@/app/_components/Search";
import Select from "@/app/_components/Select";
import ProjectsApi from "@/app/_lib/common/api/projectsApi";
import { Metadata } from "next";
import { FaFilter } from "react-icons/fa6";

export const metadata: Metadata = {
    title: "Our Unique Projects - DAQEM Studios",
    description:
        "DAQEM Studios offers a variety of unique projects, ranging from Minecraft mods to modpacks. Explore our projects and discover the latest innovations.",
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
        order?: string;
        pageSize?: string;
        types?: string[];
        loaders?: string[];
        categories?: string[];
    };
}) {
    const query = searchParams?.query;
    const page = Number(searchParams?.page) || 1;
    const order = searchParams?.order;
    const pageSize = Number(searchParams?.pageSize) || 20;
    const types =
        typeof searchParams?.types === "string"
            ? [searchParams.types]
            : searchParams?.types || [];
    const loaders =
        typeof searchParams?.loaders === "string"
            ? [searchParams.loaders]
            : searchParams?.loaders || [];
    const categories =
        typeof searchParams?.categories === "string"
            ? [searchParams.categories]
            : searchParams?.categories || [];

    const projectsApi = new ProjectsApi();
    const [projects, allCategories] = await Promise.all([
        projectsApi.getAll(
            page,
            pageSize,
            types,
            loaders,
            categories,
            order,
            query
        ),
        projectsApi.getAllCategories(),
    ]);

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
                    className="row-start-2 lg:col-start-1 lg:row-start-1 simple-card h-max group-has-[#filter-toggle:checked]/projects:hidden lg:!block"
                >
                    <ProjectFilters categories={allCategories} />
                </aside>
                <section className="contents lg:flex lg:flex-col lg:gap-4">
                    <div id="controls" className="row-start-1 lg:col-start-2">
                        <div className="w-full simple-card">
                            <div className="lg:flex grid grid-rows-3 w-full gap-4">
                                <div className="flex gap-4 grow">
                                    <div className="lg:hidden relative btn w-max !rounded-lg bg-base-100 light-border !border font-normal text-base">
                                        <input
                                            id="filter-toggle"
                                            type="checkbox"
                                            className="absolute w-full h-full appearance-none opacity-0"
                                            defaultChecked
                                        />
                                        <FaFilter />
                                        Filters
                                    </div>
                                    <Search searchParam="query" />
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div>Sort by</div>
                                    <Select
                                        searchParam="order"
                                        defaultValue={order || "relevance"}
                                        options={[
                                            {
                                                label: "Relevance",
                                                value: "relevance",
                                            },
                                            {
                                                label: "Name",
                                                value: "name",
                                            },
                                            {
                                                label: "Downloads",
                                                value: "downloads",
                                            },
                                            {
                                                label: "Creation Date",
                                                value: "createdAt",
                                            },
                                        ]}
                                    />
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div>Projects per page</div>
                                    <Select
                                        searchParam="pageSize"
                                        defaultValue={
                                            pageSize.toString() || "20"
                                        }
                                        options={[
                                            {
                                                label: "5",
                                                value: "5",
                                            },
                                            {
                                                label: "10",
                                                value: "10",
                                            },
                                            {
                                                label: "20",
                                                value: "20",
                                            },
                                            {
                                                label: "50",
                                                value: "50",
                                            },
                                            {
                                                label: "100",
                                                value: "100",
                                            },
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="pagination-top"
                        className="row-start-3 group-has-[#filter-toggle:checked]/projects:row-start-2 lg:col-start-2 lg:row-start-2 flex w-full justify-center"
                    >
                        <Pagination
                            page={projects.page}
                            maxPage={projects.total_pages}
                        />
                    </div>
                    <div
                        id="content"
                        className="row-start-4 group-has-[#filter-toggle:checked]/projects:row-start-3 lg:col-start-2 lg:row-start-3"
                    >
                        <div className="grid gap-4">
                            {projects.data.length > 0 ? (
                                projects.data.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))
                            ) : (
                                <div className="w-full text-center">
                                    No projects found.
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        id="pagination-bottom"
                        className="row-start-5 group-has-[#filter-toggle:checked]/projects:row-start-4 lg:col-start-2 lg:row-start-4 flex w-full justify-center"
                    >
                        <Pagination
                            page={projects.page}
                            maxPage={projects.total_pages}
                        />
                    </div>
                </section>
                <div></div>
            </div>
        </BodyContainer>
    );
}
