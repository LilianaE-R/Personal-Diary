import React from "react";
import PreviewCard from "./Components/PreviewCard";
import NewEntry from "./Components/NewModal";

const Home = () => {
  return (
    <div className="main">
      <h1 className="mainH1">Personal Diary</h1>
      <PreviewCard />
      <NewEntry />
    </div>
  );
};

export default Home;
