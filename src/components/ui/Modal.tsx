import type { ModalProps } from "../../types";
import successImg from "../../assets/message-receive.png";
import failedImg from "../../assets/message-wrong.png";

const Modal = ({ isOpen, onClose, type}: ModalProps) => {
    if (!isOpen) return null;

    const isSuccess = type === "success";

    return (
        <div className="fixed isnert-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
            
            {/* overlay */}
            <div className="absolute insert-0 bg-black bg-blur-sm"/>

            {/* modal content */}
            <div className="relative bg-white rounded-3xl p-8 max-2-sm w-full text-center shadow-2xl" onClick={(e) => e.stopPropagation}>
                {/* icon */}
                <div className="flex justify-center mb-5">
                    <img 
                    src={isSuccess ? successImg : failedImg} 
                    alt={isSuccess ? "Success" : "Failed"}
                    className="w-28 h-28 object-contain"/>
                </div>

                {/* title */}
                <h2 className="text-xl font-bold text-neutral-25 mb-2">
                    {isSuccess ? "Message Received!" : "Oops! Something went wrong."}
                </h2>

                {/* description */}
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {isSuccess
                    ? "Thanks for reaching out — we’ll get back to you as soon as possible."
                    : "We couldn’t send your message. Please try again or check your connection."}
                </p>

                {/* close button */}
                <button onClick={onClose}
                className="w-full bg-primary-200 text-white font-semibold py-3 rounded-full hover:bg-primary-300 transition-colors cursor-pointer">
                    {isSuccess ? "Back to Home" : "Try Again"}
                </button>
            </div>
            </div>
    );
}

export default Modal;