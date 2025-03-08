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

  const currentEntry = localData[currentIndex];

  return (
    <>
      {showPreview && currentEntry && (
        <div className="previewCard" id="previewCard">
          <div className="w-2/6">
            <img
              src={currentEntry.image}
              alt="preview"
              className="previewImage"
            />
          </div>
          <div className="card-body w-4/6">
            <h2 className="card-title">{currentEntry.date}</h2>
            <p className="text-xl">{currentEntry.title}</p>
            <div className="card-actions justify-start">
              <button
                className="btn btn-outline w-auto"
                onClick={() => onViewEntryClick(currentEntry)}
              >
                View full entry
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewCard;
