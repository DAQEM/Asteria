import { FaDownload } from "react-icons/fa6";
import { FabricIcon } from "../icon/FabricIcon";
import { ForgeIcon } from "../icon/ForgeIcon";
import { NeoForgeIcon } from "../icon/NeoForgeIcon";
import { QuiltIcon } from "../icon/QuiltIcon";

const ProjectCard = ({ project }: { project: Project }) => {
    const url = `/projects/${project.slug}`;

    return (
        <div className="simple-card grid grid-cols-[min-content,1fr] lg:grid-cols-[max-content,1fr,max-content] lg:grid-rows-[max-content,max-content,max-content] gap-x-3 gap-y-2">
            <div className="lg:row-start-1 lg:col-start-1 row-start-1 col-start-1 w-32 h-32 rounded-md overflow-hidden row-span-3">
                <a href={url}>
                    <img src={project.image_url} alt={project.name} />
                </a>
            </div>
            <div className="lg:row-start-1 lg:col-start-2 row-start-1 col-start-2 flex gap-2 items-center">
                <a href={url}>
                    <span className="text-xl font-semibold">
                        <h2>{project.name}</h2>
                    </span>
                </a>
                <p className="text-sm capitalize">({project.type})</p>
            </div>
            <p className="lg:row-start-1 lg:col-start-3 row-start-5 col-start-1 lg:min-w-28">
                <span className="flex items-center lg:justify-end">
                    <FaDownload className="mr-2" />
                    {project.downloads}
                </span>
            </p>
            <div className="lg:row-start-2 lg:col-start-2 row-start-2 col-start-2">
                <p className="lg:line-clamp-2 line-clamp-5 lg:text-base text-sm">
                    {project.summary}
                </p>
            </div>
            <div className="lg:row-start-2 lg:col-start-3 row-start-5 col-start-2 flex justify-end">
                <div className="avatar-group -space-x-3 rtl:space-x-reverse h-min -ml-1">
                    {project.users.map((user) => (
                        <div key={user.id} className="avatar border-base-200">
                            <a className="w-6" href={`/users/${user.name}`}>
                                <img src={user.image} alt={user.name} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:row-start-3 lg:col-start-3 lg:col-span-1 row-start-4 col-start-1 col-span-2 flex flex-wrap lg:justify-end justify-start gap-2 lg:max-w-32">
                {project.loaders.map((categoryOrLoader) => (
                    <span
                        key={categoryOrLoader}
                        title={categoryOrLoader}
                        className="flex text-xs items-center"
                    >
                        {categoryOrLoader.toLowerCase() === "fabric" && (
                            <div className="flex justify-center items-center mr-1">
                                <FabricIcon className="size-3" />
                            </div>
                        )}
                        {categoryOrLoader.toLowerCase() === "forge" && (
                            <div className="flex justify-center items-center mr-1">
                                <ForgeIcon className="size-3" />
                            </div>
                        )}
                        {categoryOrLoader.toLowerCase() === "neoforge" && (
                            <div className="flex justify-center items-center mr-1">
                                <NeoForgeIcon className="size-3" />
                            </div>
                        )}
                        {categoryOrLoader.toLowerCase() === "quilt" && (
                            <div className="flex justify-center items-center mr-1">
                                <QuiltIcon className="size-3" />
                            </div>
                        )}
                        {categoryOrLoader}
                    </span>
                ))}
            </div>
            <div></div>
        </div>
    );
};

export default ProjectCard;
