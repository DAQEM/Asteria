const Input = ({
    label = "",
    placeholder = "",
    defaultValue = "",
    iconLeft = null,
    iconRight = null,
    className = "",
    name = "",
}: InputProps) => {
    return (
        <div className={`form-control ${className}`}>
            {label && (
                <div className="label">
                    <span className="label-text">{label}</span>
                </div>
            )}
            <label className="input input-bordered flex items-center gap-2">
                {iconLeft}
                <input
                    type="text"
                    name={name}
                    className="grow"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
                {iconRight}
            </label>
        </div>
    );
};

export default Input;

export type InputProps = {
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    className?: string;
    name?: string;
};
