import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, index , link  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`../../assets/large/projects/${index}.PNG`)} alt="current category" />
        <p>
          {description}
        </p>
        <p>
        {link}
        </p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
