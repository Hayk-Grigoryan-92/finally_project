import "./style.scss";

export const DeleteDialog = ({
  title,
  onDelete,
  onClose,
  disableDeleteText,
}) => {
  return (
    <div className="delete-dialog-content G-flex-column gap-20">
      {!disableDeleteText ? <h3>{title}</h3> : null}
      {disableDeleteText ? <h3>{disableDeleteText}</h3> : null}

      <div className="delete-dialog-actions">
        <button className="cancel" onClick={onClose}>
          Cancel
        </button>
        {!disableDeleteText ? (
          <button className="accept" onClick={onDelete}>
            Accept
          </button>
        ) : null}
      </div>
    </div>
  );
};
