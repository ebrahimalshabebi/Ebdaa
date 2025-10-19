import React from "react";
import Footer from "../components/Footer";
import "./Works.css";

const Video = ({ setPage }) => {
  return (
    <div className="motion-page">
      {/* Top Full Image with Overlay Text */}
      <div className="motion-top-image-container">
        <img
          src="تصوير إنتاج فيديو إعلاني.png"
          alt="Video Production"
          className="motion-top-image"
        />
        <h1 className="motion-top-image-text">تصوير وإنتاج فيديو إعلاني</h1>
      </div>

      {/* Header with two lines */}
      <div className="motion-header-line">
        <div className="motion-line right-line"></div>
        <h1>اعمالنا تصوير وإنتاج فيديو إعلاني</h1>
        <div className="motion-line left-line"></div>
      </div>

      {/* ✅ New Wrapper Section for Reserved Space */}
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

      {/* Back Button */}
      <div className="motion-back-button-container">
        <button onClick={() => setPage("home")} className="motion-back-button">
        العودة إلى الصفحة الرئيسية
        </button>
      </div>

      <div className="motion-bline"></div>
      <Footer />
    </div>
  );
};

export default Video;
