import Select from "../input/Select";

const ProjectOrderSelect = ({
    order,
}: {
    order?: string;
}) => {
    return (
        <Select
            searchParam="order"
            defaultValue={order || "relevance"}
            debounce={0}
            options={[
                {
                    label: "Relevance",
                    value: "relevance",
                },
                {
                    label: "Name",
                    value: "name",
                },
                {
                    label: "Downloads",
                    value: "downloads",
                },
                {
                    label: "Creation Date",
                    value: "createdAt",
                },
            ]}
        />
    );
};

export default ProjectOrderSelect;
