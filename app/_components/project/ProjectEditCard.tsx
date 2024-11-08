import updateProjectAction from "@/app/_actions/project/updateProjectAction";
import Image from "next/image";
import { SiCurseforge, SiModrinth } from "react-icons/si";
import Form from "../form/Form";
import Checkbox from "../input/Checkbox";
import Input from "../input/Input";

const ProjectEditCard = ({ project }: { project: Project }) => {
    return (
        <div className="simple-card">
            <div className="grid lg:grid-cols-[6rem,1fr] gap-4">
                <div>
                    <Image
                        src={project.image_url}
                        alt={project.name}
                        width={96}
                        height={96}
                    />
                </div>
                <div>
                    <h3 className="text-xl">
                        <span>{project.name}</span>
                    </h3>
                    <Form action={updateProjectAction} submitButton={false}>
                        <input type="hidden" name="slug" value={project.slug} />

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr,max-content] gap-4">
                            <div>
                                <Checkbox
                                    label="Published"
                                    name="is_published"
                                    defaultChecked={project.is_published}
                                />
                            </div>
                            <Checkbox
                                label="Syncing"
                                name="should_sync"
                                defaultChecked={project.should_sync}
                            />
                            <button
                                className="btn btn-neutral w-full"
                                type="button"
                            >
                                Sync Now
                            </button>
                            <Input
                                placeholder="Modrinth Id"
                                name="modrinth_id"
                                defaultValue={project.modrinth_id}
                                iconLeft={<SiModrinth />}
                            />
                            <Input
                                placeholder="CurseForge Id"
                                name="curse_forge_id"
                                defaultValue={project.curse_forge_id}
                                iconLeft={<SiCurseforge />}
                            />
                            <button
                                className="btn btn-primary w-full"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ProjectEditCard;
