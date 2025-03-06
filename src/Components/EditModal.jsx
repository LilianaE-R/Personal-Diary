import { useState } from "react";

const EditModal = () => {

  const [localdata, setLocalData] = useState([])

  // const pullLocalData = () => {
  //   const storage = JSON.parse(localStorage.getItem("Diary"));
  //   setLocalData(storage)
  // }

  const deleteBtn = (data) => {
    const storage = JSON.parse(localStorage.getItem("Diary"));
    for (let i = 0; i < storage.length; i++) {
      if (storage[i].date === data.date) {
          storage.splice(i, 1);
          localStorage.setItem("Diary", JSON.stringify(storage));
      }
  }
  const element = document.getElementById("previewCard");
  element.remove()

  }

  // const editBtn = () => {
  //   const newEntry = prompt("Edit your Note", input.value);
  //   if (newEntry !== null) {
  //       input.value = newEntry.trim();
  //       addNotesToStorage(newNote, data.id);
  //       saveNoteBtn.textContent = "Save Note";
  //       saveNoteBtn.className = "p-1 rounded-lg outline-1 text-white text-md transition delay-100 duration-100 ease-in-out hover:scale-105 bg-blue-500 hover:bg-indigo-500 my-3";
  //   } else {
  //       alert(console.error());
  //   }  }


  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Today's entry
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <label>
            Title:
            <input name="title"/>
          </label>
          <h3 className="font-bold text-lg">Date</h3>
          <label>
            <textarea
              name="entry-notes"
              placeholder="Write your notes here"
              rows={4}
              cols={40}
            />
          </label>
          <div className="modal-action justify-center">
            <form method="dialog" className="justify-around gap-8">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <button className="btn">Delete</button>
              <button className="btn">Save</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditModal;
