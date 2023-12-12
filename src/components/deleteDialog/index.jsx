import "./style.scss";

export const DeleteDialog = ({ title, onDelete, onClose }) => {
  return (
    <div className="delete-dialog-content G-flex-column gap-20">
      <h3>{title}</h3>
      <div className="delete-dialog-actions">
        <button className="cancel" onClick={onClose}> Cancel</button>
        <button className="accept" onClick={onDelete}> Accept</button>
      </div>
    </div>
  );
};
