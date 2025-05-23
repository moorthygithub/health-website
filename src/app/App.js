import "animate.css/animate.min.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { WOW } from "wowjs";
import Preloader from "../components/Preloader";
import ScrollToTop from "../components/ScrollToTop";
import LoadTop from "../components/ScrollToTop/LoadTop";
import { Error, HomeThreeOnePage } from "../pages";
import FloatingContact from "../pages/home-3/FloatingContact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  //preloader
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  //Initialize wow
  useEffect(() => {
    new WOW({ live: false, animateClass: "animate__animated" }).init();
  }, [location]);

  return (
    <div className="App">
      {isLoading && <Preloader />}
      <FloatingContact />

      <ScrollToTop />
      <LoadTop />

      <Routes>
        <Route path="/" element={<HomeThreeOnePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
