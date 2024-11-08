"use client";

import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { FaX } from "react-icons/fa6";

export type FormProps = {
    children: React.ReactNode;
    action: (currentState: FormState, formData: FormData) => Promise<any>;
    className?: string;
    submitText?: string;
    submitButton?: boolean;
};

// Define the Form component
const Form = ({
    children,
    action,
    className,
    submitText,
    submitButton = false,
}: FormProps) => {
    // Define the initial state of the form
    const initialState: FormState = {
        errors: {},
        message: "",
    };

    // Use the useFormState hook to manage form state on the client side
    const [formState, formAction] = useFormState<FormState, any>(
        action,
        initialState
    );

    const [message, setMessage] = React.useState(formState.message);
    const [errors, setErrors] = React.useState(formState.errors?.all);

    useEffect(() => {
        setMessage(formState.message);
    }, [formState.message]);

    useEffect(() => {
        setErrors(formState.errors?.all);
    }, [formState.errors]);

    return (
        <form action={formAction} className={className}>
            {/* Display a success message if there is one */}
            {message && (
                <>
                    <div className="text-green-500 rounded-xl border-[1px] border-green-500 px-4 py-2 my-2 flex justify-between items-center">
                        <p>{message}</p>
                        <FaX
                            className="cursor-pointer"
                            onClick={() => setMessage("")}
                        />
                    </div>
                </>
            )}

            {/* Display general form errors using key 'all' */}
            {errors && errors.map((error, index) => (
                    <div
                        key={index}
                        className="text-red-500 rounded-xl border-[1px] border-red-500 px-4 py-2 my-2 flex justify-between items-center"
                    >
                        {error}
                        <FaX
                            className="cursor-pointer"
                            onClick={() => setErrors(
                                errors.filter((_, i) => i !== index)
                            )}
                        />
                    </div>
                ))}
            {/* Map over the children of the form */}
            {children}
            {/* Render the submit button */}
            {submitButton && (
                <button type="submit" className="btn btn-primary w-full mt-4">
                    {submitText ? submitText : "Submit"}
                </button>
            )}
        </form>
    );
};

// Export the Form component
export default Form;
