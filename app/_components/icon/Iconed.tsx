import { FaTools } from "react-icons/fa";
import {
    FaBolt,
    FaBook,
    FaBoxArchive,
    FaBug,
    FaCarBattery,
    FaCarrot,
    FaComment,
    FaCompass,
    FaCow,
    FaCube,
    FaCubesStacked,
    FaEarthEurope,
    FaHouse,
    FaMedal,
    FaMoneyBill,
    FaSdCard,
    FaServer,
    FaSliders,
    FaSuitcase,
    FaTruck,
    FaWandMagic,
} from "react-icons/fa6";
import { FabricIcon } from "./FabricIcon";
import { ForgeIcon } from "./ForgeIcon";
import { NeoForgeIcon } from "./NeoForgeIcon";
import { QuiltIcon } from "./QuiltIcon";

const Iconed = ({
    text,
    size,
    className,
}: {
    text: string;
    size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    className?: string;
}) => {
    const iconSize = `size-${size}`;
    const getIcon = () => {
        switch (text.toLowerCase()) {
            case "fabric":
                return <FabricIcon className={iconSize} />;
            case "forge":
                return <ForgeIcon className={iconSize} />;
            case "neoforge":
                return <NeoForgeIcon className={iconSize} />;
            case "quilt":
                return <QuiltIcon className={iconSize} />;
            case "library":
                return <FaBook className={iconSize} />;
            case "adventure":
                return <FaCompass className={iconSize} />;
            case "cursed":
                return <FaBug className={iconSize} />;
            case "decoration":
                return <FaHouse className={iconSize} />;
            case "economy":
                return <FaMoneyBill className={iconSize} />;
            case "equipment":
                return <FaTools className={iconSize} />;
            case "food":
                return <FaCarrot className={iconSize} />;
            case "game mechanics":
                return <FaSliders className={iconSize} />;
            case "magic":
                return <FaWandMagic className={iconSize} />;
            case "management":
                return <FaServer className={iconSize} />;
            case "minigame":
                return <FaMedal className={iconSize} />;
            case "mobs":
                return <FaCow className={iconSize} />;
            case "optimization":
                return <FaBolt className={iconSize} />;
            case "social":
                return <FaComment className={iconSize} />;
            case "storage":
                return <FaBoxArchive className={iconSize} />;
            case "technology":
                return <FaCarBattery className={iconSize} />;
            case "transportation":
                return <FaTruck className={iconSize} />;
            case "utility":
                return <FaSuitcase className={iconSize} />;
            case "world generation":
                return <FaEarthEurope className={iconSize} />;
            case "mod":
                return <FaCube className={iconSize} />;
            case "modpack":
                return <FaCubesStacked className={iconSize} />;
            case "plugin":
                return <FaSdCard className={iconSize} />;
            default:
                return null;
        }
    };

    return (
        <div className={"flex gap-2 items-center capitalize " + className}>
            {getIcon()}
            {text}
        </div>
    );
};

export default Iconed;
