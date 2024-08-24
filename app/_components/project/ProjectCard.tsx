import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import Iconed from "../icon/Iconed";

const ProjectCard = ({ project }: { project: Project }) => {
    const url = `/projects/${project.slug}`;

    return (
        <div className="simple-card grid grid-cols-[min-content,1fr] grid-rows-[max-content,1fr,max-content,max-content] lg:grid-cols-[max-content,1fr,max-content] lg:grid-rows-[max-content,1fr,max-content] gap-x-3 gap-y-2">
            <div className="lg:row-start-1 lg:col-start-1 row-start-1 col-start-1 lg:size-32 size-24 rounded-md overflow-hidden row-span-2 lg:row-span-3">
                <a href={url}>
                    <img src={project.image_url} alt={project.name} />
                </a>
            </div>
            <div className="lg:row-start-1 lg:col-start-2 row-start-1 col-start-2 flex gap-2 items-center">
                <a href={url}>
                    <span className="text-xl font-semibold hover:underline underline-offset-2">
                        <h2>{project.name}</h2>
                    </span>
                </a>
            </div>
            <div className="lg:row-start-1 lg:col-start-3 row-start-4 col-start-1 lg:min-w-28 group/downloads relative">
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
                            <span className="text-base">Downloads</span>
                        </p>
                        <div className="grid grid-cols-[max-content,max-content] grid-rows-2 gap-x-4">
                            {project.curse_forge_downloads > 0 && (
                                <>
                                    <p className="text-sm">CurseForge:</p>
                                    <p className="text-sm">
                                        {project.curse_forge_downloads.toLocaleString()}
                                    </p>
                                </>
                            )}
                            {project.modrinth_downloads > 0 && (
                                <>
                                    <p className="text-sm">Modrinth:</p>
                                    <p className="text-sm">
                                        {project.modrinth_downloads.toLocaleString()}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <span className="flex items-center lg:justify-end h-full">
                    <FaDownload className="mr-2" />
                    {(
                        project.curse_forge_downloads +
                        project.modrinth_downloads
                    ).toLocaleString()}
                </span>
            </div>
            <div className="lg:row-start-2 lg:col-start-2 row-start-2 col-start-2 h-full">
                <p className="lg:line-clamp-2 line-clamp-5 lg:text-base text-sm">
                    {project.summary}
                </p>
            </div>
            <div className="lg:row-start-2 lg:col-start-3 row-start-4 col-start-2 flex justify-end">
                <div className="avatar-group -space-x-3 rtl:space-x-reverse h-min -ml-1 !overflow-visible">
                    {project.users.map((user) => (
                        <div
                            key={user.id}
                            className="tooltip"
                            data-tip={user.name}
                        >
                            <div className="avatar border-base-200">
                                <a className="w-6" href={`/users/${user.name}`}>
                                    <img src={user.image} alt={user.name} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:row-start-3 lg:col-start-2 row-start-3 col-start-1 lg:col-span-1 col-span-2 flex flex-wrap gap-x-4 gap-y-1 text-sm items-end">
                <Iconed text={project.type} size={4} className="capitalize" />
                {project.categories.map((categories) => (
                    <Iconed
                        key={categories}
                        className="!gap-1"
                        text={categories}
                        size={4}
                    />
                ))}
                {project.loaders.map((loaders) => (
                    <Iconed
                        key={loaders}
                        className="!gap-1"
                        text={loaders}
                        size={4}
                    />
                ))}
            </div>
            <div className="lg:row-start-3 lg:col-start-3 row-start-5 col-start-2">
                <div className="flex justify-end items-end gap-2 h-full">
                    <div className="lg:contents hidden">
                        {project.curse_forge_url && (
                            <a
                                href={project.curse_forge_url}
                                target="_blank"
                                className="tooltip"
                                data-tip="Visit CurseForge Page"
                            >
                                <Image
                                    className="h-8 w-max"
                                    src="/images/devins-badges-3/compact-minimal/available/curseforge_vector.svg"
                                    alt="CurseForge"
                                    width={32}
                                    height={32}
                                />
                            </a>
                        )}
                        {project.modrinth_url && (
                            <a
                                href={project.modrinth_url}
                                target="_blank"
                                className="tooltip"
                                data-tip="Visit Modrinth Page"
                            >
                                <Image
                                    className="h-8 w-max"
                                    src="/images/devins-badges-3/compact-minimal/available/modrinth_vector.svg"
                                    alt="Modrinth"
                                    width={32}
                                    height={32}
                                />
                            </a>
                        )}
                    </div>
                    <div className="contents lg:hidden">
                        {project.curse_forge_url && (
                            <a
                                href={project.curse_forge_url}
                                target="_blank"
                                className="tooltip"
                                data-tip="Visit CurseForge Page"
                            >
                                <Image
                                    className="h-8 w-max"
                                    src="/images/devins-badges-3/cozy/available/curseforge_vector.svg"
                                    alt="CurseForge"
                                    width={195}
                                    height={64}
                                />
                            </a>
                        )}
                        {project.modrinth_url && (
                            <a
                                href={project.modrinth_url}
                                target="_blank"
                                className="tooltip"
                                data-tip="Visit Modrinth Page"
                            >
                                <Image
                                    className="h-8 w-max"
                                    src="/images/devins-badges-3/cozy/available/modrinth_vector.svg"
                                    alt="Modrinth"
                                    width={195}
                                    height={64}
                                />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
