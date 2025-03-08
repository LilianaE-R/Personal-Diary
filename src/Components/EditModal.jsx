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
    } else {
      entry = null
    }
  }, [entry]);

  //handling the event of the form submission
  const handleEvent = (event) => {
    event.preventDefault();
    const previousData = localData ? localData : [];
    const newId = previousData.length + 1
    const dataLocal = {
      id: newId,
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

  //   const editLsData = () => {
  //     if (localData.id = entry.id){
  //       localStorage.setItem("Diary", JSON.stringify(localData))
  //     }
  //   }
  };

  return (
    <div className="modal-box max-w-3xl">
      <div className="modal-action justify-center">
        <form
          id="entry-modal"
          method="dialog"
          className="flex flex-col w-full"
          onSubmit={handleEvent}
        >
          <label className="text-lg font-bold">
            Title:
            <input
              className="input input-success w-5/6"
              name="title"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label className="mt-6 text-lg font-bold">
            Date:
            <input
              className="input input-success"
              type="date"
              name="date"
              required
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
          <label className="mt-6 text-lg font-bold">
            Image:
            <input
              className="input input-success w-5/6"
              name="image"
              required
              value={image}
              onChange={(event) => { setImage(event.target.value) }} />
          </label>
          <label for="entry-notes" className="mt-6 text-lg font-bold">
            <textarea
              className="textarea textarea-success w-full"
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
          <button 
          type="submit" 
          className="btn mt-6 btn-outline btn-success">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
