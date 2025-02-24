const PastModal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Today's entry
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <label>
            Title:
            <input name="title" required />
          </label>
          <h3 className="font-bold text-lg">Date</h3>
          <label>
            <textarea
              name="entry-notes"
              placeholder="Write your notes here"
              required
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

export default PastModal;
