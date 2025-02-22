const PreviewCard = () => {
  // Here is the preview of the journal entry. It reads the data out of the local storage, if there is any.
  const placeholderImage =
    "https://i.pinimg.com/736x/2a/11/93/2a1193dabddd7412fb06ddaf78b7f872.jpg";
  return (
    <>
      <div className="previewCard">
        <figure>
          <img src={placeholderImage} alt="preview" className="previewImage" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Date</h2>
          <p>Title</p>
          <div className="card-actions justify-end">
            {/* Maybe the Full view can be seen below this preview-entry?? */}
            <button className="btn btn-success">View full entry.</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewCard;
