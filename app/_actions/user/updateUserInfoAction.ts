import UsersApi from "@/app/_lib/common/api/usersApi";

const updateUserInfoAction = async (
    currentState: FormState,
    formData: FormData
) => {
    "use server";

    const userData: {
        name?: string;
        bio?: string;
    } = {
        name: (formData.get("name") as string).trim(),
        bio: (formData.get("bio") as string).trim(),
    };

    const errors: Errors = {};

    if (!userData.name) {
        errors.name = ["Name is required"];
    }

    if (!userData.bio) {
        errors.bio = ["Bio is required"];
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors,
        };
    }

    const response: ApiResponse<User> = await new UsersApi().updateUser(
        userData.name!,
        userData.bio!
    );

    if (!response.success) {
        return {
            errors: response.errors,
        };
    }

    return {
        success: true,
        message: "Changes saved successfully.",
    };
};

export default updateUserInfoAction;
