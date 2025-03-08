import React from "react";

const EntryModal = ({ entry, onClose, onEdit, localData }) => {
  // check if there is no entry
  if (!entry) return null;

  const handleDelete = () => {
    const result = localData.filter((item) => {
      return item.id != entry.id
    })
    console.log(result)
    localStorage.setItem("Diary", JSON.stringify(result));
    location.reload()
  }

  return (
    <div className="card bg-base-100 w-96 shadow-sm text-black">
      <figure>
        <img
          src={entry.image}
          alt={entry.id} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{entry.title}</h2>
        <h3 className="card-subtitle">{entry.date}</h3>
        <p>{entry.note}</p>
        <div className="card-actions justify-end">
          <button 
          className="btn btn-info" 
          onClick={() => onEdit(entry)}>
            Edit
          </button>
          <button 
          className="btn btn-info" 
          onClick={handleDelete}>
            Delete
          </button>
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryModal;
