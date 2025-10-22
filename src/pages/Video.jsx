import React from "react";
import Footer from "../components/Footer";
import WorksHeader from "../pages/WorksHeader";
import "./Works.css";

const Video = ({ setPage }) => {
  return (
    <div className="motion-page">
      <WorksHeader
      onBack={() => setPage("home", { anchor: "ourwork" })}
      onLogoClick={() => setPage("home")}
      />

      <div className="motion-top-image-container">
        <img
          src="تصوير إنتاج فيديو إعلاني.png"
          alt="Video Production"
          className="motion-top-image"
        />
        <h1 className="motion-top-image-text">تصوير وإنتاج فيديو إعلاني</h1>
      </div>

      <div className="motion-header-line">
        <div className="motion-line right-line"></div>
        <h1>اعمالنا تصوير وإنتاج فيديو إعلاني</h1>
        <div className="motion-line left-line"></div>
      </div>

      <div className="motion-section">
        <div className="motion-card-container">
          <div className="motion-card">
            <img
              src="بنك القطيب.png"
              alt="بنك القطيبي"
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

export default Video;
