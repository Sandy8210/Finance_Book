import { useState } from "react";
import Home from "./Component/Customer/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Customer/Navbar/Navbar";
import Hero from "./Component/Customer/Hero/Hero";

const App = () => {
  const heroData = [
    { text1: "Image 1", text2: "Image Text1- 2" },
    { text1: "Image 2", text2: "Image Text2- 2" },
    { text1: "Image 3", text2: "Image Text3- 2" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Navbar />

      {/* <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      /> */}
    </div>
  );
};

export default App;
