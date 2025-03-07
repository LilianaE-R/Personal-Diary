import React, { useState, useEffect } from "react";
import EntryModal from "./EntryModal";

const PreviewCard = ({ localData, onViewEntryClick }) => {
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (localData && localData.length > 0) {
      setShowPreview(true);
    }
  }, [localData]);

  if (!localData || localData.length === 0) {
    return <p>No entries available</p>;
  }

  return (
    <>
      {showPreview &&
        localData.map((entry, index) => (
          <div className="previewCard" id="previewCard" key={index}>
            <div className="w-2/6">
              <img src={entry.image} alt="preview" className="previewImage" />
            </div>
            <div className="card-body w-4/6">
              <h2 className="card-title">{entry.date}</h2>
              <p>{entry.title}</p>
              <div className="card-actions justify-start">
                <button
                  className="btn btn-outline"
                  onClick={() => onViewEntryClick(entry)}
                >
                  View full entry
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PreviewCard;
