const AddBar = () => {
  const addEntry = () => {
    console.log("Add Entry");
  };

  return (
    <div className="addBar">
      <button className="btn btn-info addBtn" onClick={addEntry}>
        Add Entry
      </button>
    </div>
  );
};

export default AddBar;
