import React from "react";
import Footer from "../components/Footer";
import WorksHeader from "../pages/WorksHeader";
import "./Works.css";

const Motion = ({ setPage }) => {
  return (
    <div className="motion-page">
      <WorksHeader
      onBack={() => setPage("home", { anchor: "ourwork" })}
      onLogoClick={() => setPage("home")}
      />
      {/* Top Full Image with Overlay Text */}
      <div className="motion-top-image-container">
        <img
          src="تصميم موشن جرافيك.png"
          alt="Motion Graphics"
          className="motion-top-image"
        />
        <h1 className="motion-top-image-text">تصميم موشن جرافيك</h1>
      </div>

      {/* Header with two lines */}
      <div className="motion-header-line">
        <div className="motion-line right-line"></div>
        <h1>اعمالنا في تصميم الموشن جرافيك</h1>
        <div className="motion-line left-line"></div>
      </div>

      {/* ✅ New Wrapper Section for Reserved Space */}
      <div className="motion-section">
        <div className="motion-card-container">
          <div className="motion-card">
            <img
              src="logoSide-06.png"
              alt="Ebdaa Media"
              className="motion-card-image"
            />
          </div>
        </div>
      </div>

      <div className="motion-bline"></div>
      <Footer />
    </div>
  );
};

export default Motion;
