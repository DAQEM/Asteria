import Select from "../input/Select";

const PageSizeSelect = ({
    pageSize,
}: {
    pageSize: number;
}) => {
    return (
        <Select
            searchParam="pageSize"
            defaultValue={pageSize.toString() || "20"}
            debounce={0}
            options={[
                {
                    label: "5",
                    value: "5",
                },
                {
                    label: "10",
                    value: "10",
                },
                {
                    label: "20",
                    value: "20",
                },
                {
                    label: "50",
                    value: "50",
                },
                {
                    label: "100",
                    value: "100",
                },
            ]}
        />
    );
};

export default PageSizeSelect;
