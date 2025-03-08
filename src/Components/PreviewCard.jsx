import React, { useState, useEffect } from "react";

const PreviewCard = ({ localData, currentIndex, onViewEntryClick }) => {
  //Setting the state for the preview: Show or show not?
  const [showPreview, setShowPreview] = useState(false);

  //Using the useEffect to check if there is any data in the local storage: if yes, show the preview
  useEffect(() => {
    if (localData && localData.length > 0) {
      setShowPreview(true);
    }
  }, [localData]);

  //Text if there is no entry yet
  if (!localData || localData.length === 0) {
    return <p>No entries available</p>;
  }

  const entries = localData.slice(currentIndex, currentIndex + 3);

  return (
    <>
      <div className="previewCardContainer">
        {showPreview &&
          entries.map((entry, index) => (
            <div className="previewCard" id="previewCard">
              <div className="w-2/6">
                <img src={entry.image} alt="preview" className="previewImage" />
              </div>
              <div className="card-body w-4/6">
                <h2 className="card-title">{entry.date}</h2>
                <p className="text-xl">{entry.title}</p>
                <div className="card-actions justify-start">
                  <button
                    className="btn btn-outline w-auto"
                    onClick={() => onViewEntryClick(entry)}
                  >
                    View full entry
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default PreviewCard;
