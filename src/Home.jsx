import React from "react";
import PreviewCard from "./Components/PreviewCard";
import AddBar from "./Components/AddBar";
import EntryModal from "./Components/EntryModal";



const Home = () => {
  return (
    <div className="main">
      <h1 className="mainH1">Personal Diary</h1>
      <EntryModal />
      {/* <AddBar /> */}
      <PreviewCard />
    </div>
  );
};

export default Home;
