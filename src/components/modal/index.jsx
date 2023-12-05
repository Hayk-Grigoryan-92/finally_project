import "./style.scss";

export const Modal = ({ onClose, title, children }) => {
  return (
    <div className="modalContainer">
      <div className="modal_bg" onClick={onClose}></div>
      <div className="modal">
        <div className="modal_header">
          {title ? <h3>{title}</h3> : null}
          <span onClick={onClose}>X</span>
        </div>
        <div className="modal_body">
          {children}
        </div>
      </div>
    </div>
  );
};
