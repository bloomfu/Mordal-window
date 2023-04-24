import React, { useState } from "react";
import "./Mordal.css";

function Modal() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <div>
      <button onClick={showModal}>開く</button>

      {visible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={hideModal}>
              &times;
            </span>
            <p>モーダルウインドウ！</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
