import {
    FaApple,
    FaChrome,
    FaEdge,
    FaFirefox,
    FaLinux,
    FaQuestion,
    FaSafari,
    FaWindows,
} from "react-icons/fa6";
import { match, P } from "ts-pattern";

const SessionOSIcon = ({ session }: { session: SessionResponse }) => {
    return (
        <div className="size-8 relative">
            {match(session.operating_system.toLowerCase())
                .with(
                    P.when((os) => os.includes("windows")),
                    () => <FaWindows className="size-8" />
                )
                .with(
                    P.when((os) => os.includes("mac")),
                    () => <FaApple className="size-8" />
                )
                .with(
                    P.when((os) => os.includes("linux")),
                    () => <FaLinux className="size-8" />
                )
                .otherwise(() => (
                    <FaQuestion className="size-8" />
                ))}
            <div className="absolute -right-2 -bottom-2 p-1 bg-base-300 rounded-full">
                {match(session.browser.toLowerCase())
                    .with(
                        P.when((browser) => browser.includes("chrome")),
                        () => <FaChrome className="size-4" />
                    )
                    .with(
                        P.when((browser) => browser.includes("firefox")),
                        () => <FaFirefox className="size-4" />
                    )
                    .with(
                        P.when((browser) => browser.includes("safari")),
                        () => <FaSafari className="size-4" />
                    )
                    .with(
                        P.when((browser) => browser.includes("edge")),
                        () => <FaEdge className="size-4" />
                    )
                    .otherwise(() => (
                        <FaQuestion className="size-4" />
                    ))}
            </div>
        </div>
    );
};

export default SessionOSIcon;
