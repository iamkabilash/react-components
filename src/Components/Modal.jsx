import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-70"
      ></div>
      <div className="fixed inset-x-40 inset-y-60 p-10 bg-white rounded-2xl">
        <div className="flex flex-col justify-between">
          {children}
          {actionBar}
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
