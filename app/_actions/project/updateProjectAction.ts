import ProjectsApi from "@/app/_lib/common/api/projectsApi";

const updateProjectAction = async (
    currentState: FormState,
    formData: FormData
) => {
    "use server";

    const data: {
        slug: string;
        is_published: boolean;
        should_sync: boolean;
        modrinth_id: string;
        curse_forge_id?: string;
    } = {
        slug: formData.get("slug") as string,
        is_published: formData.get("is_published") === "on",
        should_sync: formData.get("should_sync") === "on",
        modrinth_id: formData.get("modrinth_id") as string,
        curse_forge_id: formData.get("curse_forge_id") as string,
    };

    const errors: Errors = {};

    if (!data.slug) {
        errors.slug = ["Slug is required"];
    }

    if (!data.modrinth_id) {
        errors.modrinth_id = ["Modrinth ID is required"];
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors,
        };
    }

    const response = await new ProjectsApi().update(data.slug, {
        is_published: data.is_published,
        should_sync: data.should_sync,
        modrinth_id: data.modrinth_id,
        curse_forge_id: data.curse_forge_id,
    });

    if (!response.success) {
        return {
            errors: response.errors,
        };
    }

    return {
        message: "Project updated successfully",
    };
};

export default updateProjectAction;
