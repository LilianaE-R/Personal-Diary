import React, { useEffect, useState, useRef } from "react";
import PreviewCard from "./Components/PreviewCard";
import EntryModal from "./Components/EntryModal";
import EditModal from "./Components/EditModal";
import Header from "./Components/Header";

const Home = () => {
  const [localdata, setLocalData] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEntryModalOpen, setIsEntryModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
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

  //Using the useEffect to pull the data from the local storage
  useEffect(() => {
    pullLocalData();
  }, []);

  //Using the useEffect to open the EDIT modal and check if the modal is open
  useEffect(() => {
    if (isEditModalOpen && editModalRef.current) {
      editModalRef.current.showModal();
    }
  }, [isEditModalOpen]);

  //Using the useEffect to open the ENTRY modal and check if the modal is open
  useEffect(() => {
    if (isEntryModalOpen && entryModalRef.current) {
      entryModalRef.current.showModal();
    }
  }, [isEntryModalOpen]);

  //Handling the add entry click
  const handleAddEntryClick = () => {
    setEntryToEdit(null); // Clear any existing entry data
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
      Math.min(prevIndex + 1, localdata.length - 1)
    );
  };

  const handleCurrentClick = () => {
    setCurrentIndex(localdata.length - 1);
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
        localData={localdata}
        currentIndex={currentIndex}
        onViewEntryClick={handleViewEntryClick}
      />

      <dialog ref={editModalRef} className="modal">
        <EditModal
          localData={localdata}
          entry={entryToEdit}
          onClose={handleCloseEditModal}
          onSave={handleSaveEntry}
        />
      </dialog>

      <dialog ref={entryModalRef} className="modal">
        <EntryModal
          entry={selectedEntry}
          onClose={handleCloseEntryModal}
          onEdit={handleEditEntryClick}
        />
      </dialog>
    </div>
  );
};

export default Home;
