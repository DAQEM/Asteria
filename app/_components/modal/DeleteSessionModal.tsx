import deleteSessionAction from "@/app/_actions/auth/session/deleteSessionAction";
import { FaX } from "react-icons/fa6";
import Form from "../form/Form";

const DeleteSessionModal = ({
    id,
    session,
}: {
    id: number;
    session: SessionResponse;
}) => {
    return (
        <dialog id={"delete-session-modal-" + id} className="modal">
            <div className="modal-box p-0">
                <div className="flex justify-between bg-primary-gradient px-6 pt-4 pb-2">
                    <div className="">
                        <h3 className="font-bold text-lg">
                            <span>Delete Session</span>
                        </h3>
                    </div>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost">
                            <span>
                                <FaX />
                            </span>
                        </button>
                    </form>
                </div>
                <div className="px-6 py-4 grid gap-4">
                    <p>
                        Are you sure you want to delete this session? You will
                        be logged out on this device.
                    </p>
                    <div className="flex justify-end gap-4">
                        <form method="dialog" className="flex-1">
                            <button className="btn btn-neutral w-full">
                                Cancel
                            </button>
                        </form>
                        <Form
                            action={deleteSessionAction}
                            className="flex-1"
                            submitButton={false}
                        >
                            <input
                                type="hidden"
                                name="id"
                                id="id"
                                value={session.id}
                            />
                            <button className="btn btn-error text-white w-full">
                                Delete
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default DeleteSessionModal;
