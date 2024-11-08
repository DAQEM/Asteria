import SessionsApi from "@/app/_lib/common/api/sessionsApi";
import { redirect } from "next/navigation";

const deleteSessionAction = async (
    currentState: FormState,
    formData: FormData
) => {
    "use server";

    const data: {
        id?: string;
    } = {
        id: formData.get("id") as string,
    };

    const errors: Errors = {};

    if (!data.id) {
        errors.name = ["Something went wrong. Please try again."];
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors,
        };
    }

    await new SessionsApi().delete(data.id!);

    redirect("/settings/sessions");
};

export default deleteSessionAction;
