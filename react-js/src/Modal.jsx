import React, { useState, useEffect } from 'react';
import './Modal.css';

function Modal() {
  const [visible, setVisible] = useState(false);

  // useEffect フックは、「クリック」イベントのドキュメント オブジェクトにイベント リスナーを追加するために使用。
  useEffect(() => {
    const handleClick = (event) => {
      // クリックイベントのターゲット要素がモーダル自体である場合ウインドウを閉じる
      if (event.target.classList.contains('modal')) {
        hideModal();
      }
    };

    document.addEventListener('click', handleClick);

    // コンポーネントがアンマウントされた時
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [visible]);

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
