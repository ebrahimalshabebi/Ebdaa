import React from "react";
import Footer from "../components/Footer";
import "./Works.css";

const Digital = ({ setPage }) => {
  return (
    <div className="motion-page">
      {/* Top Full Image with Overlay Text */}
      <div className="motion-top-image-container">
        <img
          src="حملات إعلانية.png"
          alt="Digital Campaigns"
          className="motion-top-image"
        />
        <h1 className="motion-top-image-text">حملات إعلانية</h1>
      </div>

      {/* Header with two lines */}
      <div className="motion-header-line">
        <div className="motion-line right-line"></div>
        <h1>اعمالنا في الحملات الإعلانية</h1>
        <div className="motion-line left-line"></div>
      </div>

      {/* ✅ New Wrapper Section for Reserved Space */}
      <div className="motion-section">
        <div className="motion-card-container">
          <div className="motion-card">
            <img
              src="اسمنت صيرة.jpg"
              className="motion-card-image"
            />
          </div>
          <div className="motion-card">
            <img
              src="انيس فون.png"
              className="motion-card-image"
            />
          </div>
          <div className="motion-card">
            <img
              src="images (1).jpg"
              className="motion-card-image"
            />
          </div>
          <div className="motion-card">
            <img
              src="قوة أسد.png"
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

export default Digital;
