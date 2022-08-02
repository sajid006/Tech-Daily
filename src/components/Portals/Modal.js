import React, { useEffect } from "react";
import "./modalStyles.css";
import ReactPortal from "./ReactPortal";

function Modal({ children, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
        
      <div className="modal">
      <div className="modal-content-button">
        <button onClick={handleClose} className="close-btn">
          X
        </button>
        </div>
        <div className="modal-content">{children}</div>
        
        
      </div>
      
    </ReactPortal>
  );
}

export default Modal;
