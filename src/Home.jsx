import React from "react";
import PreviewCard from "./Components/PreviewCard";
import EntryModal from "./Components/EntryModal";



const Home = ({data}) => {
  return (
    <div className="main">
      <h1 className="mainH1">Personal Diary</h1>
      <EntryModal />
      <PreviewCard data={data}/>
    </div>
  );
};

export default Home;
