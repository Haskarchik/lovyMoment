import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/app.css";
import Header from "./components/header/Header";
import SeactionBlock from "./components/seactionBlock/SeactionBlock";
import Footer from "./components/footer/Footer";
import Festival from "./pages/Festival";
import Corporate from "./pages/Corporate";
import Promotion from "./pages/Promotion";
import Carousel from "./pages/Carousel";
import ChildParty from "./pages/ChildParty";
import Trampoline from "./pages/Trampoline";
import AllEntertiments from "./components/allEntertimes/AllEntertiments";
import Caller from "./components/UI/Caller";
import Notification from "./components/UI/Notification";
import Page from "./pages/productPages/Page";
import MegaGame from "./pages/MegaGame";
import Food from "./pages/Food";
import PageNotFound from "./pages/PageNotFound";

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

        <Route path="/Page/:id" element={<Page />} />

        <Route
          path="Corporate"
          element={<Corporate updateDatas={updateData} />}
        />
        <Route
          path="Promotion"
          element={<Promotion updateDatas={updateData} />}
        />
        <Route
          path="Carousel"
          element={<Carousel updateDatas={updateData} />}
        />
        <Route
          path="Child-party"
          element={<ChildParty updateDatas={updateData} />}
        />
        <Route
          path="Trampoline"
          element={<Trampoline updateDatas={updateData} />}
        />
        <Route
          path="Festival"
          element={<Festival updateDatas={updateData} />}
        />
          <Route
          path="MegaGame"
          element={<MegaGame updateDatas={updateData} />}
        />
          <Route
          path="Food"
          element={<Food updateDatas={updateData} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Caller />
      <Notification />
      <Footer />
    </div>
  );
}

export default App;
