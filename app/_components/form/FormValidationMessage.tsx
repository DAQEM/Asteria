const FormValidationMessage = ({
    id,
    formState,
}: {
    id: string;
    formState: FormState;
}) => {
    if (!formState || !formState.errors || !formState.errors[id]) {
        return null;
    }

    return formState.errors[id].map((error, index) => (
        <div key={index} className="text-error">
            {error}
        </div>
    ));
};

export default FormValidationMessage;
