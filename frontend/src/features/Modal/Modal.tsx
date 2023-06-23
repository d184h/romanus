import React from 'react';
import './modal.css';

function Modal({
  show,
  setShow,
}: {
  show: any;
  setShow: (value: boolean) => void;
}): JSX.Element {
  return (
    <div className="app">
      <div>
        <button
          type="button"
          className="open-btn"
          onClick={() => setShow(!show)}
        >
          modal
        </button>
      </div>
      {/* <Modal show={show} setShow={setShow} /> */}
    </div>

    <div
      className={show ? 'modal active' : 'modal'}
      onClick={() => setShow(!show)}
    >
      <div
        className={show ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        eicneijcbneiubceuchbeudhcnx
      </div>
    </div>
  );
}

export default Modal;
