"use client";

import React from "react";
import { useFormState } from "react-dom";

// Define the Form component
const Form = (props: FormProps) => {
    // Define the initial state of the form
    const initialState: FormState = {
        errors: {},
        message: "",
    };

    // Use the useFormState hook to manage form state on the client side
    const [formState, formAction] = useFormState<FormState, any>(
        props.action,
        initialState
    );

    return (
        <div>
            <form action={formAction} className={props.className}>
                {/* Display a success message if there is one */}
                {formState.message && (
                    <>
                        <div className="text-green-500 rounded-xl border-[1px] border-green-500 bg-green-100 px-4 py-2 mt-4">
                            {formState.message}
                        </div>
                        {!formState.errors && props.children}
                    </>
                )}

                {/* Display general form errors using key 'all' */}
                {formState.errors &&
                    formState.errors.all &&
                    formState.errors.all.map((error, index) => (
                        <div
                            key={index}
                            className="text-red-500 rounded-xl border-[1px] border-red-500 bg-red-100 px-4 py-2"
                        >
                            {error}
                        </div>
                    ))}
                {/* Map over the children of the form */}
                {formState.errors &&
                    React.Children.map(props.children, (child) => {
                        if (React.isValidElement(child)) {
                            // Convert error keys to lowercase for case-insensitive matching
                            const lowerCaseErrors: Errors = Object.keys(
                                formState.errors!
                            ).reduce((result: Errors, key) => {
                                result[key.toLowerCase()] =
                                    formState.errors![key];
                                return result;
                            }, {} as Errors);

                            // @ts-ignore
                            if (!child.props.id) {
                                return child;
                            }

                            // Get the errors for the current child
                            const errors: string[] | undefined =
                                // @ts-ignore
                                lowerCaseErrors[child.props.id.toLowerCase()]; // If you are getting an error on this line, all of the children of the Form component must have an id prop
                            return (
                                <>
                                    {/* Display errors for the current child */}
                                    {errors &&
                                        errors.map((error, index) => (
                                            <div
                                                key={index}
                                                className="text-red-500 rounded-xl border-[1px] border-red-500 bg-red-100 px-4 py-2"
                                            >
                                                {error}
                                            </div>
                                        ))}
                                    {/* Render the child */}
                                    {child}
                                </>
                            );
                        }
                        return child;
                    })}
                {/* Render the submit button */}
                {props.submitButton && (
                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                    >
                        {props.submitText ? props.submitText : "Submit"}
                    </button>
                )}
            </form>
        </div>
    );
};

// Export the Form component
export default Form;
