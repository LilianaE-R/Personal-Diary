import "./App.css";
import Header from "./components/Header";
import NewModal from "./Components/EntryModal";
import Home from "./Home";
import EditModal from "./Components/EditModal";
import { useEffect, useState } from "react";

const App = () => {

  const [localData, setLocalData] = useState([])

  useEffect(()=>{
    const storage = JSON.parse(localStorage.getItem("Diary"));
    setLocalData(storage)
  },[])

  return (
    <>
    <Header/>
    <Home data={localData}/>
    <EditModal data={localData}/>
    
    
    </>
  )
}

export default App;
