import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/app.css";
import Header from "./components/header/Header";
import SeactionBlock from "./components/seactionBlock/SeactionBlock";
import Footer from "./components/footer/Footer";
import Festival from "./pages/Festival";
import Corporate from "./pages/Corporate";
import Promotion from "./pages/Promotion";
import Birthday from "./pages/Birthday";
import ChildParty from "./pages/ChildParty";
import CityDay from "./pages/CityDay";
import Briz from "./pages/productPages/Briz";
import AllEntertiments from "./components/allEntertimes/AllEntertiments";
import Minion from "./pages/productPages/Minion";
import Caller from "./components/UI/Caller";
import Notification from "./components/UI/Notification";

const mainpage = [
  <Header></Header>,
  <SeactionBlock></SeactionBlock>,
  <AllEntertiments />,
];

function App() {
   const [takedLink, setLink] = useState("");
    

    
  function updateData(name) {
    setLink(name);
  }

  
  return (
    <div className="app">
      
      <Routes>

        <Route path="/" element={mainpage} />
       <Route path="/Briz" element={<Briz/>} />
       <Route path="/Minion" element={<Minion/>} />
        
        <Route
          path="Corporate"
          element={<Corporate updateDatas={updateData} />}
        />
        <Route
          path="Promotion"
          element={<Promotion updateDatas={updateData} />}
        />
        <Route
          path="Birthday"
          element={<Birthday updateDatas={updateData} />}
        />
        <Route
          path="ChildParty"
          element={<ChildParty updateDatas={updateData} />}
        />
        <Route path="CityDay" element={<CityDay updateDatas={updateData} />} />
        <Route
          path="Festival"
          element={<Festival updateDatas={updateData} />}
        />
            
       

      </Routes>
      <Caller/>
      <Notification/>
      <Footer />
    </div>
  );
}

export default App;
