import React, { useEffect, useState } from "react";
import PreviewCard from "./Components/PreviewCard";
import EntryModal from "./Components/EntryModal";

const Home = () => {
  const [localdata, setLocalData] = useState([]);

  const pullLocalData = () => {
    const storage = JSON.parse(localStorage.getItem("Diary"));
    if (storage) {
      setLocalData(storage);
    }
  };

  useEffect(() => {
    pullLocalData();
  }, []);

  return (
    <div className="main">
      <h1 className="mainH1">Personal Diary</h1>
      <EntryModal localData={localdata} />
      <PreviewCard localData={localdata} />
    </div>
  );
};

export default Home;
