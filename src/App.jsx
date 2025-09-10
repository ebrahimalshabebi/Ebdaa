import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Features from "./components/Features";
import WhoWeAre from "./components/WhoWeAre";
import Carousel from "./components/Carousel";
import MarketingServicesGrid from "./components/MarketingServicesGrid";

// import your pages
import VisualIdentity from "./pages/VisualIdentity";
import DigitalAds from "./pages/DigitalAds";
import Campaigns from "./pages/Campaigns";
import ContentCreation from "./pages/ContentCreation";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && (
        <>
          <Header />
          <Carousel />
          <Services />
          <WhoWeAre />
          {/* Pass setPage function down so buttons can navigate */}
          <MarketingServicesGrid setPage={setPage} />
          <Features />
          <Footer />
        </>
      )}

      {page === "visualIdentity" && <VisualIdentity setPage={setPage} />}
      {page === "digitalAds" && <DigitalAds setPage={setPage}/>}
      {page === "campaigns" && <Campaigns setPage={setPage}/>}
      {page === "contentCreation" && <ContentCreation setPage={setPage}/>}
    </div>
  );
}
