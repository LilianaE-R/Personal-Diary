const NewModal = () => {

    const now = new Date();
    const dateTime = now.toLocaleString();

//useState for title and notes in order to save it in the LS

    const saveBtn = (event) => {
        // Get previous data OR an empty array
        const previousData = JSON.parse(localStorage.getItem("Diary")) || [];
        //set format for array with data for LS
        const dataLocal = {
            title: event.target[0].value,
            date: event.target[1].value,
            note: event.target[2].value,
        }
        console.log(dataLocal);
        localStorage.setItem("Diary", JSON.stringify([...previousData, dataLocal]));
        }


    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Today's entry</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="modal-action justify-center">
                        <form method="dialog" className="justify-around gap-8" onSubmit={saveBtn}>
                            <label>
                                Title:
                                <input name="title" required />
                            </label>
                            <label>
                                Date:
                                <input type="date" name="date" required/>
                            </label>
                            <label>
                                <textarea name="entry-notes" placeholder="Write your notes here" required rows={4} cols={40} />
                            </label>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn">Delete</button>
                            <button className="btn">Save</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default NewModal