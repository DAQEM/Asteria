"use client";

import Image from "next/image";
import { useState } from "react";
import { useFormState } from "react-dom";
import FormSuccessMessage from "../form/FormSuccessMessage";
import FormValidationMessage from "../form/FormValidationMessage";

const UserProfileSettingForm = ({
    user,
    action,
}: {
    user: User;
    action: ServerAction;
}) => {
    const maxNameLength = 24;
    const maxBioLength = 128;

    const initialState: FormState = {
        errors: {},
        success: false,
        message: "",
    };

    const [formState, formAction] = useFormState<FormState, any>(
        action,
        initialState
    );

    const initialName = user.name;
    const initialBio = user.bio;

    const [name, setName] = useState(initialName);
    const [bio, setBio] = useState(initialBio);

    function handleDiscardChanges() {
        setName(initialName);
        setBio(initialBio);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        if (value.length > maxNameLength) {
            setName(value.slice(0, maxNameLength));
        } else {
            setName(value);
        }
    }

    function updateBio(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        if (value.length > maxBioLength) {
            setBio(value.slice(0, maxBioLength));
        } else {
            setBio(value);
        }
    }

    return (
        <form action={formAction} className="flex flex-col gap-2">
            <div className="mb-4">
                <h3 className="text-lg font-semibold">
                    <span>Profile Picture</span>
                </h3>
                <div className="flex items-center gap-2 max-w-lg">
                    <Image
                        src={user.image}
                        alt="User Avatar"
                        className="rounded-full size-12"
                        width={48}
                        height={48}
                    />
                    <p className="text-sm">
                        Your profile picture has been synced with your Discord
                        account. In order to change it, please update your
                        Discord profile picture.
                    </p>
                </div>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">
                    <span>Username</span>
                </h3>
                <p>A unique name for your profile.</p>
                <FormValidationMessage id="name" formState={formState} />
                <label className="input input-bordered flex items-center gap-2 max-w-[18rem] w-full mt-1">
                    <input
                        className="grow"
                        type="text"
                        name="name"
                        value={name}
                        onChange={updateName}
                    />
                    <span className="badge bg-base-300">
                        {name?.length ?? 0}/{maxNameLength}
                    </span>
                </label>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">
                    <span>Bio</span>
                </h3>
                <p>A short description about yourself.</p>
                <FormValidationMessage id="bio" formState={formState} />
                <label className="input input-bordered flex items-center gap-2 max-w-xl w-full mt-1">
                    <input
                        className="grow"
                        type="text"
                        name="bio"
                        value={bio ?? ""}
                        onChange={updateBio}
                    />
                    <span className="badge bg-base-300">
                        {bio?.length ?? 0}/{maxBioLength}
                    </span>
                </label>
            </div>
            <FormSuccessMessage
                formState={formState}
                className="mb-4 text-success"
            />
            <div className="flex gap-4">
                <button
                    type="submit"
                    className="btn btn-primary flex-1 max-w-48 w-full"
                >
                    Save
                </button>
                <button
                    type="button"
                    className="btn btn-neutral flex-1 max-w-48 w-full"
                    onClick={() => handleDiscardChanges()}
                >
                    Discard Changes
                </button>
            </div>
        </form>
    );
};

export default UserProfileSettingForm;
