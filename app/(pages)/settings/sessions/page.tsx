import SessionOSIcon from "@/app/_components/auth/session/SessionOSIcon";
import DeleteSessionModal from "@/app/_components/modal/DeleteSessionModal";
import ModalButton from "@/app/_components/modal/ModalButton";
import SessionsApi from "@/app/_lib/common/api/sessionsApi";
import moment from "moment";
import { redirect } from "next/navigation";
import { FaTrash } from "react-icons/fa6";

export default async function Page() {
    const sessions = await new SessionsApi().getAll();

    if (!sessions.success || !sessions.data || sessions.data.length < 0)
        redirect("/settings");

    return (
        <div className="simple-card">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold">
                    <span>Sessions</span>
                </h2>
                <p>
                    These are the sessions that are currently active on your
                    account.
                </p>
                {sessions.data.map((session, index) => (
                    <div
                        key={index}
                        className="mt-4 bg-base-300 p-4 rounded-xl grid grid-cols-[max-content,1fr,max-content] gap-4"
                    >
                        <div className="size-12 flex justify-center items-center">
                            <SessionOSIcon session={session} />
                        </div>
                        <div>
                            <h3 className="text-md font-medium">
                                <span>
                                    {session.operating_system} -{" "}
                                    {session.browser} - {session.ip_address}
                                </span>
                            </h3>
                            <p>
                                <span
                                    className="tooltip tooltip-primary text-base-content"
                                    data-tip={moment(
                                        session.last_used_at
                                    ).format("LLLL")}
                                >
                                    Last used:
                                    {" " +
                                        moment(session.last_used_at).fromNow()}
                                </span>
                                {" - "}
                                <span
                                    className="tooltip tooltip-primary text-base-content"
                                    data-tip={moment(session.created_at).format(
                                        "LLLL"
                                    )}
                                >
                                    Created:
                                    {" " + moment(session.created_at).fromNow()}
                                </span>
                                {" - "}
                                <span
                                    className="tooltip tooltip-primary text-base-content"
                                    data-tip={moment(session.expires_at).format(
                                        "LLLL"
                                    )}
                                >
                                    Expires:
                                    {" " + moment(session.expires_at).fromNow()}
                                </span>
                            </p>
                        </div>
                        <div className="flex h-full items-center">
                            {session.is_current_session ? (
                                <span className="badge badge-neutral">
                                    Current Session
                                </span>
                            ) : (
                                <>
                                    <ModalButton
                                        targetId={
                                            "delete-session-modal-" + index
                                        }
                                        className="btn btn-ghost"
                                    >
                                        <FaTrash />
                                    </ModalButton>
                                    <DeleteSessionModal
                                        id={index}
                                        session={session}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
