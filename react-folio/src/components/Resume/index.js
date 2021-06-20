import React from 'react';
import '../../assets/resume/Emily_Stewart_Resume.pdf';

const Modal = ({ resume }) => {
  const { myResume } = resume;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">Enjoy my Resume! </h3>
        <a href="../../assets/resume/Emily_Stewart_Resume.pdf" download></a>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
