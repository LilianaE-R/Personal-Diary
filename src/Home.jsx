import React, { useEffect, useState, useRef } from "react";
import PreviewCard from "./Components/PreviewCard";
import EntryModal from "./Components/EntryModal";
import EditModal from "./Components/EditModal";
import Header from "./Components/Header";

const Home = () => {
  const [localData, setLocalData] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEntryModalOpen, setIsEntryModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState({});
  const [entryToEdit, setEntryToEdit] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const editModalRef = useRef(null);
  const entryModalRef = useRef(null);

  //Pulling the data from the local storage
  const pullLocalData = () => {
    const storage = JSON.parse(localStorage.getItem("Diary"));
    if (storage) {
      setLocalData(storage);
    }
  };

  //useEffect to pull data from local storage (once)
  useEffect(() => {
    pullLocalData();
  }, []);

  //useEffect to show edit modal when isEditModalOpen changes
  useEffect(() => {
    if (isEditModalOpen && editModalRef.current) {
      editModalRef.current.showModal();
    }
  }, [isEditModalOpen]);

  //useEffect to show entry modal when isEntryModalOpen changes
  useEffect(() => {
    if (isEntryModalOpen && entryModalRef.current) {
      entryModalRef.current.showModal();
    }
  }, [isEntryModalOpen]);

  //Handling the add entry click
  const handleAddEntryClick = () => {
    // Reset the entry to edit
    setEntryToEdit(null);
    // set the state to "true" (is open)
    setEntryToEdit(null); // Clear any existing entry data
    setSelectedEntry(null);
    setIsEditModalOpen(true);
  };

  //Handling the edit modal
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    if (editModalRef.current) {
      editModalRef.current.close();
    }
    pullLocalData(); // Refresh the data after closing the modal
  };

  //Handling the VIEW FULL ENTRY click, passing the entry to the modal
  const handleViewEntryClick = (entry) => {
    setSelectedEntry(entry);
    setIsEntryModalOpen(true);
  };

  //Handling the CLOSE ENTRY modal
  const handleCloseEntryModal = () => {
    setIsEntryModalOpen(false);
    if (entryModalRef.current) {
      entryModalRef.current.close();
    }
  };

  //Handling the EDIT ENTRY click, passing the entry to the modal
  const handleEditEntryClick = (entry) => {
    setEntryToEdit(entry);
    setIsEditModalOpen(true);
    setIsEntryModalOpen(false);
  };

  const handleSaveEntry = (index) => {
    setCurrentIndex(index);
    pullLocalData();
  };

  //Handling the navigation BUTTONS
  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, localData.length - 1)
    );
  };

  const handleCurrentClick = () => {
    setCurrentIndex(Math.floor(localData.length - 1));
  };
  //End of the handling the navigation

  return (
    <div className="main">
      <Header
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
        onCurrentClick={handleCurrentClick}
      />
      <h1 className="mainH1">Personal Diary</h1>
      <button className="btn btn-info addBtn" onClick={handleAddEntryClick}>
        Add Entry
      </button>

      <PreviewCard
        localData={localData}
        currentIndex={currentIndex}
        onViewEntryClick={handleViewEntryClick}
      />

      <dialog ref={editModalRef} className="modal">
        <EditModal
          localData={localData}
          entry={entryToEdit}
          onClose={handleCloseEditModal}
          onSave={handleSaveEntry}
        />
      </dialog>

      <dialog ref={entryModalRef} className="modal">
        <EntryModal
          localData={localData}
          entry={selectedEntry}
          onClose={handleCloseEntryModal}
          onEdit={handleEditEntryClick}
        />
      </dialog>
    </div>
  );
};

export default Home;
