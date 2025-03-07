import React, { useState, useEffect } from "react";

const EditModal = ({ localData, entry, onClose }) => {
  //Setting the state for the title, notes, date and image
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  //Using the useEffect to set the state of the title, notes, date and image, if anything changes of the current entry
  useEffect(() => {
    if (entry) {
      setTitle(entry.title);
      setNotes(entry.note);
      setDate(entry.date);
      setImage(entry.image);
    }
  }, [entry]);

  //handling the event of the form submission
  const handleEvent = (event) => {
    event.preventDefault();
    const previousData = localData ? localData : [];
    const dataLocal = {
      title: title,
      date: date,
      image: image,
      note: notes,
    };
    localStorage.setItem("Diary", JSON.stringify([...previousData, dataLocal]));
    setTitle("");
    setNotes("");
    setImage("");
    setDate("");
    onClose();
  };

  return (
    <div className="modal-box">
      <div className="modal-action justify-center">
        <form
          id="entry-modal"
          method="dialog"
          className="justify-around gap-8"
          onSubmit={handleEvent}
        >
          <label>
            Title:
            <input
              name="title"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              required
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
          <label>
            <textarea
              name="entry-notes"
              placeholder="Write your notes here"
              required
              rows={4}
              cols={40}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </label>
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
          <button type="submit" className="btn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
