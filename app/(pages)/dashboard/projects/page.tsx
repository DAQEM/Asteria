import Pagination from "@/app/_components/input/Pagination";
import Search from "@/app/_components/input/Search";
import PageSizeSelect from "@/app/_components/nav/PageSizeSelect";
import ProjectEditCard from "@/app/_components/project/ProjectEditCard";
import ProjectOrderSelect from "@/app/_components/project/ProjectOrderSelect";
import ProjectsApi from "@/app/_lib/common/api/projectsApi";

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
        order?: string;
        pageSize?: string;
        types?: string[];
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

    const projectsApi = new ProjectsApi();
    const projects = await projectsApi.getAllUser(
        page,
        pageSize,
        types,
        order,
        query
    );

    return (
        <div className="grid gap-4">
            <div className="w-full simple-card">
                <div className="lg:flex grid grid-rows-3 w-full gap-4">
                    <div className="flex gap-4 grow">
                        <Search searchParam="query" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <div>Sort by</div>
                        <ProjectOrderSelect order={order} />
                    </div>
                    <div className="flex gap-2 items-center">
                        <div>Projects per page</div>
                        <PageSizeSelect pageSize={pageSize} />
                    </div>
                </div>
            </div>
            {projects.total_pages > 1 && (
                <div className="flex w-full justify-center">
                    <Pagination
                        page={projects.page}
                        maxPage={projects.total_pages}
                    />
                </div>
            )}
            {projects.data.map((project, index) => (
                <div key={index}>
                    <ProjectEditCard project={project} />
                </div>
            ))}
            {projects.total_pages > 1 && (
                <div className="flex w-full justify-center">
                    <Pagination
                        page={projects.page}
                        maxPage={projects.total_pages}
                    />
                </div>
            )}
        </div>
    );
}
