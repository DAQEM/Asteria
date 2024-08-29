import BodyContainer from "@/app/_components/BodyContainer";
import ProjectCard from "@/app/_components/project/ProjectCard";
import UserTabSelector from "@/app/_components/user/UserTabSelector";
import ProjectsApi from "@/app/_lib/common/api/projectsApi";
import UsersApi from "@/app/_lib/common/api/usersApi";
import moment from "moment";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaEdit } from "react-icons/fa";

export default async function Page({
    params: { username },
    searchParams,
}: {
    params: { username: string };
    searchParams: { tab: string };
}) {
    const user = await new UsersApi().getUser(username);

    if (!user) return notFound();

    const projectsTab: boolean = searchParams.tab === "projects";
    const blogsTab: boolean = searchParams.tab === "blogs";
    const serversTab: boolean = searchParams.tab === "servers";

    let projects;
    if (projectsTab || (!blogsTab && !serversTab)) {
        projects = await new ProjectsApi().getProjectsByUser(username);
    }

    let blogs;
    if (blogsTab) {
        blogs = {
            data: [
                {
                    id: 1,
                    title: "Blog 1",
                },
                {
                    id: 2,
                    title: "Blog 2",
                },
            ],
            page: 0,
            page_size: 0,
            total_count: 0,
            total_pages: 0,
        };
    }

    let servers;
    if (serversTab) {
        servers = {
            data: [
                {
                    id: 1,
                    name: "Server 1",
                },
                {
                    id: 2,
                    name: "Server 2",
                },
            ],
            page: 0,
            page_size: 0,
            total_count: 0,
            total_pages: 0,
        };
    }

    return (
        <BodyContainer className="mt-6 lg:mt-12 px-4 lg:px-0">
            <div className="grid lg:grid-cols-[1fr,20rem] gap-4 lg:gap-y-6">
                <div className="lg:col-span-2">
                    <div className="grid grid-cols-[max-content,1fr] gap-4">
                        <figure className="size-24">
                            <Image
                                src={user.image}
                                width={96}
                                height={96}
                                alt="User Avatar"
                                className="rounded-full"
                            />
                        </figure>
                        <div>
                            <h1 className="text-4xl font-semibold">
                                <span>{user.name}</span>
                            </h1>
                            <p className="text-lg">{user.bio}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <UserTabSelector />
                </div>
                <div className="flex lg:justify-end">
                    <a
                        href="/settings/profile"
                        className="btn btn-neutral px-6"
                    >
                        <FaEdit />
                        Edit
                    </a>
                </div>
                <div className="lg:min-h-[50vh]">
                    {(projectsTab || (!blogsTab && !serversTab)) &&
                        (projects ? (
                            projects.data.length > 0 ? (
                                projects.data.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))
                            ) : (
                                <p className="text-lg">No projects found.</p>
                            )
                        ) : (
                            <p className="text-lg">
                                Something went wrong! Try reloading the page.
                            </p>
                        ))}
                    {blogsTab &&
                        (blogs ? (
                            blogs.data.length > 0 ? (
                                blogs.data.map((blog) => (
                                    <div key={blog.id}>
                                        <p>{blog.title}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No blogs found.</p>
                            )
                        ) : (
                            <p>Something went wrong! Try reloading the page.</p>
                        ))}
                    {serversTab &&
                        (servers ? (
                            servers.data.length > 0 ? (
                                servers.data.map((server) => (
                                    <div key={server.id}>
                                        <p>{server.name}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No servers found.</p>
                            )
                        ) : (
                            <p>Something went wrong! Try reloading the page.</p>
                        ))}
                </div>
                <div className="mb-4">
                    <div className="simple-card">
                        <h2 className="text-lg font-semibold">
                            <span>Info</span>
                        </h2>
                        <div className="font-medium">
                            <div className="mt-2 flex gap-2">
                                <p className="font-semibold">Joined:</p>{" "}
                                <p
                                    className="tooltip"
                                    data-tip={moment(user.joined * 1000).format(
                                        "MMMM Do YYYY, h:mm:ss a"
                                    )}
                                >
                                    {moment(user.joined * 1000).fromNow()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BodyContainer>
    );
}
