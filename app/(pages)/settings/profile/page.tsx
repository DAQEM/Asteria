import updateUserInfoAction from "@/app/_actions/user/updateUserInfoAction";
import UserProfileSettingForm from "@/app/_components/user/UserProfileSettingForm";
import UsersApi from "@/app/_lib/common/api/usersApi";
import { redirect } from "next/navigation";

export default async function Page() {
    const authResponse = await new UsersApi().me();

    if (!authResponse.success) redirect("/settings");

    const user = authResponse.data;

    if (!user) redirect("/settings");

    return (
        <div className="simple-card">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold">
                    <span>Profile Settings</span>
                </h2>
                <p>Update your profile settings.</p>
            </div>
            <UserProfileSettingForm user={user} action={updateUserInfoAction} />
        </div>
    );
}
