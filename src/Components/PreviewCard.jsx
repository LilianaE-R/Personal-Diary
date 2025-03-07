const PreviewCard = ({ data }) => {

  return (
    <>
      {data && data.map((entry, index) => (
        <div className="previewCard" id="previewCard" key={index}>
          <div className="w-2/6">
            <img src={entry.img} alt="preview" className="previewImage" />
          </div>
          <div className="card-body w-4/6">
            <h3 className="card-title">{entry.date}</h3>
            <h2>{entry.title}</h2>
            <p>{entry.note}</p>
              {/* <button className="btn btn-outline" onClick={()=>{}}>View full entry</button> add an id here to make sure only that specific entry is created */}
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn"
                onClick={() => document.getElementById("my_modal_2").showModal()}
              >
                View full details
              </button>
            </div>
          </div>
        
      ))}
    </>
  );
};

export default PreviewCard;
