import { useState } from "react";

const EntryModal = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  //useState for title,notes,date in order to save it in the LS for a controlled form as now it is an uncontrolled one

  const handleEvent = (event) => {
    event.preventDefault();
    // Get previous data OR an empty array
    const previousData = JSON.parse(localStorage.getItem("Diary")) || [];
    //set format for array with data for LS
    const dataLocal = {
      title: title,
      date: date,
      image: image,
      note: notes,
    };
    console.log(dataLocal);
    localStorage.setItem("Diary", JSON.stringify([...previousData, dataLocal]));
    //use states here to return empty fields of input once the form is submitted/clicked save btn
    setTitle("");
    setNotes("");
    setImage("");
    setDate("");
    window.location.reload();
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-info addBtn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Today's entry
      </button>
      <dialog id="my_modal_1" className="modal">
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
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </label>
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  required
                  value={date}
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
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
                  onChange={(event) => {
                    setNotes(event.target.value);
                  }}
                />
              </label>
              {/* <label>
                Image:
                <input 
                type="image" 
                name="image" 
                required
                className="size-24 object-contain w-64" 
                src={image} 
                onChange={(event)=>{setDate(event.target.value)}} />
              </label> */}
              {/* if there is a button in form, it will close the modal */}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                ✕
              </button>
              <button type="submit" className="btn">
                {" "}
                Save
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EntryModal;
