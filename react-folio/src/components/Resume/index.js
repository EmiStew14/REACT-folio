import React from 'react';
import resume from '../../assets/resume/Emily_Stewart_Resume.pdf';

const Modal = ({ onClose, }) => {
  const { myResume } = resume;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">Enjoy my Resume! </h3>
        <a href =
        {myResume}
        download></a>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
