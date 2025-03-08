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
    setImage(null);
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



// [
//   { "title": "Day 1", "date": "2025-01-01", "image": "https://picsum.photos/200/300", "note": "Today was a productive day." },
//   { "title": "Day 2", "date": "2025-01-02", "image": "https://picsum.photos/200/301", "note": "Got a lot done, also learned something new." },
//   { "title": "Day 3", "date": "2025-01-03", "image": "https://picsum.photos/200/302", "note": "It was a stressful day, but everything worked out in the end." },
//   { "title": "Day 4", "date": "2025-01-04", "image": "https://picsum.photos/200/303", "note": "I relaxed today and enjoyed some free time." },
//   { "title": "Day 5", "date": "2025-01-05", "image": "https://picsum.photos/200/304", "note": "Worked on my website and improved some features." },
//   { "title": "Day 6", "date": "2025-01-06", "image": "https://picsum.photos/200/305", "note": "It was a quiet day at home." },
//   { "title": "Day 7", "date": "2025-01-07", "image": "https://picsum.photos/200/306", "note": "Got some errands done and prepared for the week." },
//   { "title": "Day 8", "date": "2025-01-08", "image": "https://picsum.photos/200/307", "note": "A hectic day, but I managed to handle everything." },
//   { "title": "Day 9", "date": "2025-01-09", "image": "https://picsum.photos/200/308", "note": "Spent time with friends and recharged." },
//   { "title": "Day 10", "date": "2025-01-10", "image": "https://picsum.photos/200/309", "note": "Started a new project, excited to see where it goes." },
//   { "title": "Day 11", "date": "2025-01-11", "image": "https://picsum.photos/200/310", "note": "Very productive day, got a lot done." },
//   { "title": "Day 12", "date": "2025-01-12", "image": "https://picsum.photos/200/311", "note": "A relaxed day, focused on hobbies." },
//   { "title": "Day 13", "date": "2025-01-13", "image": "https://picsum.photos/200/312", "note": "Spent some time learning and exploring new topics online." },
//   { "title": "Day 14", "date": "2025-01-14", "image": "https://picsum.photos/200/313", "note": "Worked on an important task and completed it." },
//   { "title": "Day 15", "date": "2025-01-15", "image": "https://picsum.photos/200/314", "note": "Had fun with family today." },
//   { "title": "Day 16", "date": "2025-01-16", "image": "https://picsum.photos/200/315", "note": "A bit tired but still managed to finish everything." },
//   { "title": "Day 17", "date": "2025-01-17", "image": "https://picsum.photos/200/316", "note": "Went for a run and felt much better afterwards." },
//   { "title": "Day 18", "date": "2025-01-18", "image": "https://picsum.photos/200/317", "note": "A productive day that brought me a lot of results." },
//   { "title": "Day 19", "date": "2025-01-19", "image": "https://picsum.photos/200/318", "note": "Had a lot to do today, but it was manageable." },
//   { "title": "Day 20", "date": "2025-01-20", "image": "https://picsum.photos/200/319", "note": "Spent the day outdoors and enjoyed the weather." },
//   { "title": "Day 21", "date": "2025-01-21", "image": "https://picsum.photos/200/320", "note": "Worked on a new feature for my project." },
//   { "title": "Day 22", "date": "2025-01-22", "image": "https://picsum.photos/200/321", "note": "Feeling productive today." },
//   { "title": "Day 23", "date": "2025-01-23", "image": "https://picsum.photos/200/322", "note": "A stressful day, but I achieved a lot." },
//   { "title": "Day 24", "date": "2025-01-24", "image": "https://picsum.photos/200/323", "note": "Worked on some details for my website." },
//   { "title": "Day 25", "date": "2025-01-25", "image": "https://picsum.photos/200/324", "note": "Had a relaxing day and got some rest." },
//   { "title": "Day 26", "date": "2025-01-26", "image": "https://picsum.photos/200/325", "note": "Feeling very creative and productive today." },
//   { "title": "Day 27", "date": "2025-01-27", "image": "https://picsum.photos/200/326", "note": "Had an eventful day with interesting conversations." },
//   { "title": "Day 28", "date": "2025-01-28", "image": "https://picsum.photos/200/327", "note": "Worked hard on a new project today." },
//   { "title": "Day 29", "date": "2025-01-29", "image": "https://picsum.photos/200/328", "note": "Another productive day with many successes." },
//   { "title": "Day 30", "date": "2025-01-30", "image": "https://picsum.photos/200/329", "note": "Spent time with friends and enjoyed the evening." },
//   { "title": "Day 31", "date": "2025-01-31", "image": "https://picsum.photos/200/330", "note": "Wrapped up the month feeling satisfied." }
// ];
