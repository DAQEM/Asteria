import BodyContainer from "../BodyContainer";
import SidebarNavigation, {
    SidebarNavigationSection,
} from "./SidebarNavigation";

const SidebarNavigationLayout = ({
    children,
    sections,
    defaultPath
}: SidebarNavigationLayoutProps) => {
    return (
        <BodyContainer>
            <div className="grid lg:grid-cols-[20rem,1fr] gap-4 mb-4 lg:min-h-[50vh]">
                <SidebarNavigation sections={sections} defaultPath={defaultPath} />
                <div className="h-max">{children}</div>
            </div>
        </BodyContainer>
    );
};

export default SidebarNavigationLayout;

export type SidebarNavigationLayoutProps = {
    children: React.ReactNode;
    sections: SidebarNavigationSection[];
    defaultPath: string;
};
