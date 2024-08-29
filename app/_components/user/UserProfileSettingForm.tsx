"use client";

import Image from "next/image";
import { useState } from "react";
import { useFormState } from "react-dom";
import FormSuccessMessage from "../FormSuccessMessage";
import FormValidationMessage from "../FormValidationMessage";

const UserProfileSettingForm = ({
    user,
    action,
}: {
    user: User;
    action: ServerAction;
}) => {
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

    return (
        <form action={formAction}>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">
                    <span>Profile Picture</span>
                </h3>
                <div className="flex items-center gap-2 max-w-lg mb-4">
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
                <input
                    className="input input-bordered mt-1 w-full"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">
                    <span>Bio</span>
                </h3>
                <p>A short description about yourself.</p>
                <FormValidationMessage id="bio" formState={formState} />
                <input
                    className="input input-bordered max-w-xl w-full mt-1"
                    type="text"
                    name="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
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
