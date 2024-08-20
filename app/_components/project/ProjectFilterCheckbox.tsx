const ProjectFilterCheckbox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2 py-1">
                <input
                    type="checkbox"
                    className="checkbox checkbox-sm bg-base-300"
                />
                {children}
            </label>
        </div>
    );
};

export default ProjectFilterCheckbox;
