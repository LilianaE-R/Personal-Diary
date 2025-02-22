import React from "react";
import PreviewCard from "./Components/PreviewCard";
import AddBar from "./Components/AddBar";

const Home = () => {
  return (
    <div className="main">
      <h1 className="mainH1">Personal Diary</h1>
      <AddBar />
      <PreviewCard />
    </div>
  );
};

export default Home;
