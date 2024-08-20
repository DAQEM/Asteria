import { FaDiscord, FaX } from "react-icons/fa6";
import LoginButton from "../auth/LoginButton";

const LoginModal = () => {
    return (
        <dialog id="login-modal" className="modal">
            <div className="modal-box p-0">
                <div className="flex justify-between bg-primary-gradient px-6 pt-4 pb-2">
                    <div className="">
                        <h3 className="font-bold text-lg">
                            <span>Sign in</span>
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
                        Signing in to your account allows you to interact with
                        blog posts, vote on Minecraft server listings, and more.
                    </p>
                    <LoginButton provider="discord">
                        <FaDiscord className="size-6 mr-1" />
                        <span>Sign in with Discord</span>
                    </LoginButton>
                    <p className="text-xs">
                        Currently, we only support signing in with Discord. If
                        you don&apos;t have a Discord account, you can create one for
                        free at{" "}
                        <a
                            href="https://discord.com/register"
                            target="_blank"
                            className="underline"
                        >
                            discord.com/register
                        </a>
                    </p>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default LoginModal;
