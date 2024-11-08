const Checkbox = ({ label, defaultChecked, name }: CheckboxProps) => {
    return (
        <label className="label cursor-pointer justify-start gap-2">
            <input
                type="checkbox"
                name={name}
                className="checkbox"
                defaultChecked={defaultChecked}
            />
            <span className="label-text text-base">{label}</span>
        </label>
    );
};

export default Checkbox;

export type CheckboxProps = {
    label?: string;
    defaultChecked?: boolean;
    name?: string;
};
