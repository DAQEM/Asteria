type FormSuccessMessageProps = React.PropsWithChildren<{
    formState: FormState;
}> & React.HTMLAttributes<HTMLDivElement>;

const FormSuccessMessage = ({
    formState,
    ...props
}: FormSuccessMessageProps) => {
    if (formState.success === false || !formState.message) {
        return null;
    }

    return (
        <div className="text-success" {...props}>
            {formState.message}
        </div>
    );
};

export default FormSuccessMessage;
