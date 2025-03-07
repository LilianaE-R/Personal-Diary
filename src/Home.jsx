import React, { useEffect, useState, useRef } from "react";
import PreviewCard from "./Components/PreviewCard";
import EntryModal from "./Components/EntryModal";
import EditModal from "./Components/EditModal";

const Home = () => {
  const [localdata, setLocalData] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEntryModalOpen, setIsEntryModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const editModalRef = useRef(null);
  const entryModalRef = useRef(null);

  const pullLocalData = () => {
    const storage = JSON.parse(localStorage.getItem("Diary"));
    if (storage) {
      setLocalData(storage);
    }
  };

  useEffect(() => {
    pullLocalData();
  }, []);

  useEffect(() => {
    if (isEditModalOpen && editModalRef.current) {
      editModalRef.current.showModal();
    }
  }, [isEditModalOpen]);

  useEffect(() => {
    if (isEntryModalOpen && entryModalRef.current) {
      entryModalRef.current.showModal();
    }
  }, [isEntryModalOpen]);

  const handleAddEntryClick = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    if (editModalRef.current) {
      editModalRef.current.close();
    }
    pullLocalData(); // Refresh the data after closing the modal
  };

  const handleViewEntryClick = (entry) => {
    setSelectedEntry(entry);
    setIsEntryModalOpen(true);
  };

  const handleCloseEntryModal = () => {
    setIsEntryModalOpen(false);
    if (entryModalRef.current) {
      entryModalRef.current.close();
    }
  };

  return (
    <div className="main">
      <h1 className="mainH1">Personal Diary</h1>
      <button className="btn btn-info addBtn" onClick={handleAddEntryClick}>
        Add Entry
      </button>

      <PreviewCard
        localData={localdata}
        onViewEntryClick={handleViewEntryClick}
      />

      <dialog ref={editModalRef} className="modal">
        <EditModal localData={localdata} onClose={handleCloseEditModal} />
      </dialog>

      <dialog ref={entryModalRef} className="modal">
        <EntryModal entry={selectedEntry} onClose={handleCloseEntryModal} />
      </dialog>
    </div>
  );
};

export default Home;
