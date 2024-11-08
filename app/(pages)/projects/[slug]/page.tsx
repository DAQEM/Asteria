import BodyContainer from "@/app/_components/BodyContainer";
import Iconed from "@/app/_components/icon/Iconed";
import Markdown from "@/app/_components/input/Markdown";
import MarkdownToc from "@/app/_components/input/MarkdownToc";
import ProjectsApi from "@/app/_lib/common/api/projectsApi";
import moment from "moment";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
    FaArrowUpRightFromSquare,
    FaDownload,
    FaGithub,
} from "react-icons/fa6";
import { SiCurseforge, SiModrinth } from "react-icons/si";
import "../../../markdown.css";

export default async function Page({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const project = await new ProjectsApi().getProject(slug, true, true);

    if (!project) return notFound();

    return (
        <BodyContainer>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>{project.name}</li>
                </ul>
            </div>
            <div className="grid grid-rows-[max-content,max-content,max-content] lg:grid-rows-[max-content,max-content] grid-cols-1 lg:grid-cols-[1fr,20rem] gap-4 mt-6">
                <div className="grid grid-cols-[max-content,1fr] gap-4 col-span-1 lg:col-span-2">
                    <div className="size-24 rounded-md overflow-hidden">
                        <Image
                            src={project.image_url}
                            alt={project.name}
                            width={96}
                            height={96}
                            className="rounded-md"
                        />
                    </div>
                    <div className="grid grid-rows-[max-content,1fr,max-content] gap-1 h-full">
                        <div className="flex gap-2 items-center">
                            <span className="text-xl lg:text-3xl font-semibold">
                                <h2>{project.name}</h2>
                            </span>
                        </div>
                        <div className="h-full">
                            <p className="line-clamp-2 lg:text-base text-sm">
                                {project.summary}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 items-end">
                            <div
                                className={
                                    "absolute hidden group-hover/downloads:block right-0 bg-base-300 border-2 border-base-content border-opacity-20 px-4 py-2 w-max rounded-lg" +
                                    (project.curse_forge_downloads > 0 &&
                                    project.modrinth_downloads > 0
                                        ? " h-24 -top-[6.5rem]"
                                        : " h-16 -top-[4.5rem]")
                                }
                            >
                                <div className="grid justify-center items-center h-full">
                                    <p className="h-min">
                                        <span className="text-base">
                                            Downloads
                                        </span>
                                    </p>
                                    <div className="grid grid-cols-[max-content,max-content] grid-rows-2 gap-x-4">
                                        {project.curse_forge_downloads > 0 && (
                                            <>
                                                <p className="text-sm">
                                                    CurseForge:
                                                </p>
                                                <p className="text-sm">
                                                    {project.curse_forge_downloads.toLocaleString()}
                                                </p>
                                            </>
                                        )}
                                        {project.modrinth_downloads > 0 && (
                                            <>
                                                <p className="text-sm">
                                                    Modrinth:
                                                </p>
                                                <p className="text-sm">
                                                    {project.modrinth_downloads.toLocaleString()}
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaDownload className="mr-2 size-4" />
                                {(
                                    project.curse_forge_downloads +
                                    project.modrinth_downloads
                                ).toLocaleString()}{" "}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-start-1 lg:row-start-2 simple-card h-max">
                    <Markdown content={project.description} />
                </div>
                <div className="lg:col-start-2 lg:row-start-2 flex flex-col gap-4">
                    <MarkdownToc content={project.description} />
                    {(project.git_hub_url ||
                        project.curse_forge_url ||
                        project.modrinth_url) && (
                        <div className="simple-card">
                            <span className="text-lg font-semibold">Links</span>
                            {project.git_hub_url && (
                                <div className="font-medium mt-2">
                                    <a
                                        href={project.git_hub_url}
                                        className="flex items-center hover:underline underline-offset-2"
                                    >
                                        <FaGithub className="mr-2 size-4" />
                                        GitHub
                                        <FaArrowUpRightFromSquare className="ml-2 size-3" />
                                    </a>
                                </div>
                            )}
                            {project.curse_forge_url && (
                                <div className="font-medium mt-2">
                                    <a
                                        href={project.curse_forge_url}
                                        className="flex items-center hover:underline underline-offset-2"
                                    >
                                        <SiCurseforge className="mr-2 size-4" />
                                        CurseForge
                                        <FaArrowUpRightFromSquare className="ml-2 size-3" />
                                    </a>
                                </div>
                            )}
                            {project.modrinth_url && (
                                <div className="font-medium mt-2">
                                    <a
                                        href={project.modrinth_url}
                                        className="flex items-center hover:underline underline-offset-2"
                                    >
                                        <SiModrinth className="mr-2 size-4" />
                                        Modrinth
                                        <FaArrowUpRightFromSquare className="ml-2 size-3" />
                                    </a>
                                </div>
                            )}
                        </div>
                    )}
                    {project.users.length > 0 && (
                        <div className="simple-card">
                            <span className="text-lg font-semibold">
                                Authors
                            </span>
                            <div className="font-medium">
                                {project.users.map((author, index) => (
                                    <a
                                        key={index}
                                        href={`/users/${author.name}`}
                                        className="flex items-center hover:underline underline-offset-2 mt-2"
                                    >
                                        <Image
                                            src={author.image}
                                            alt=""
                                            className="avatar rounded-full mr-2"
                                            width={40}
                                            height={40}
                                        />
                                        {author.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="simple-card">
                        <span className="text-lg font-semibold">
                            Categories
                        </span>
                        <div className="font-medium">
                            {project.categories.map((category, index) => (
                                <Iconed
                                    key={index}
                                    text={category.replace(/-/g, " ")}
                                    size={4}
                                    className="capitalize mt-2"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="simple-card">
                        <span className="text-lg font-semibold">Loaders</span>
                        <div className="font-medium">
                            {project.loaders.map((loader, index) => (
                                <Iconed
                                    key={index}
                                    text={loader}
                                    size={4}
                                    className="capitalize mt-2"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="simple-card">
                        <span className="text-lg font-semibold">Info</span>
                        <div className="font-medium">
                            <div className="mt-2 flex gap-2">
                                <p className="font-semibold">Type:</p>
                                <Iconed
                                    text={project.type}
                                    size={4}
                                    className="capitalize"
                                />
                            </div>
                            <div className="mt-2 flex gap-2">
                                <p className="font-semibold">Published:</p>{" "}
                                <p
                                    className="tooltip"
                                    data-tip={moment(project.created_at).format(
                                        "MMMM Do YYYY, h:mm:ss a"
                                    )}
                                >
                                    {moment(project.created_at).fromNow()}
                                </p>
                            </div>
                            <div className="mt-2 flex gap-2">
                                <p className="font-semibold">Synced:</p>{" "}
                                <p
                                    className="tooltip"
                                    data-tip={moment(project.synced_at).format(
                                        "MMMM Do YYYY, h:mm:ss a"
                                    )}
                                >
                                    {moment(project.synced_at).fromNow()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BodyContainer>
    );
}
