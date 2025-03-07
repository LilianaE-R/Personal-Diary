import React from "react";

const EntryModal = ({ entry, onClose, onEdit }) => {
  // check if there is no entry
  if (!entry) return null;

  return (
    <div className="modal-box">
      <h2>{entry.title}</h2>
      <p>{entry.date}</p>
      <p>{entry.note}</p>
      <button className="btn btn-info" onClick={() => onEdit(entry)}>
        Edit
      </button>
      <button
        type="button"
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

export default EntryModal;
