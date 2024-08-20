"use client";

const ModalButton = ({
    targetId,
    className,
    children,
}: {
    targetId: string;
    className: string;
    children: React.ReactNode;
}) => {
    return (
        <button
            className={className + " "}
            onClick={() => {
                const document =
                    typeof window !== "undefined" ? window.document : null;
                if (!document) {
                    return;
                }
                const modal: HTMLDialogElement = document.getElementById(
                    targetId
                ) as HTMLDialogElement;
                if (modal) {
                    modal.showModal();
                }
            }}
        >
            {children}
        </button>
    );
};

export default ModalButton;
