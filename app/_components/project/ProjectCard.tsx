import { FaDownload } from "react-icons/fa6";
import Iconed from "../icon/Iconed";

const ProjectCard = ({ project }: { project: Project }) => {
    const url = `/projects/${project.slug}`;

    return (
        <div className="simple-card grid grid-cols-[min-content,1fr] grid-rows-[max-content,1fr,max-content,max-content] lg:grid-cols-[max-content,1fr,max-content] lg:grid-rows-[max-content,1fr,max-content] gap-x-3 gap-y-2">
            <div className="lg:row-start-1 lg:col-start-1 row-start-1 col-start-1 w-32 h-32 rounded-md overflow-hidden row-span-2 lg:row-span-3">
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
            </div>
            <p className="lg:row-start-1 lg:col-start-3 row-start-4 col-start-1 lg:min-w-28">
                <span className="flex items-center lg:justify-end">
                    <FaDownload className="mr-2" />
                    {project.downloads}
                </span>
            </p>
            <div className="lg:row-start-2 lg:col-start-2 row-start-2 col-start-2 h-full">
                <p className="lg:line-clamp-2 line-clamp-5 lg:text-base text-sm">
                    {project.summary}
                </p>
            </div>
            <div className="lg:row-start-2 lg:col-start-3 row-start-4 col-start-2 flex justify-end">
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
        </div>
    );
};

export default ProjectCard;
