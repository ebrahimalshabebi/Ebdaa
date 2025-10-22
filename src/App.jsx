import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Features from "./components/Features";
import WhoWeAre from "./components/WhoWeAre";
import Carousel from "./components/Carousel";
import MarketingServicesGrid from "./components/MarketingServicesGrid";
import OurWork from "./components/OurWork";

// pages
import VisualIdentity from "./pages/VisualIdentity";
import DigitalAds from "./pages/DigitalAds";
import Campaigns from "./pages/Campaigns";
import ContentCreation from "./pages/ContentCreation";
import Digital from "./pages/Digital";
import Video from "./pages/Video";
import Motion from "./pages/Motion";

const PAGES = new Set([
  "home","digital","video","motion",
  "visualIdentity","digitalAds","campaigns","contentCreation"
]);

function parseHash() {
  const raw = window.location.hash.replace("#", "");
  const [first = "home", maybeAnchor = null] = raw.split("/");

  // If the first segment isn't a known page, treat it as a home anchor.
  if (!PAGES.has(first) && first) {
    return { page: "home", anchor: first };
  }
  return { page: first || "home", anchor: maybeAnchor || null };
}

export default function App() {
  const [{ page, anchor }, setNav] = useState(parseHash());

  // use this instead of setPage
  const navigate = (nextPage, opts = {}) => {
    const nextAnchor = opts.anchor || null;
    const hash = `#${nextPage}${nextAnchor ? `/${nextAnchor}` : ""}`;
    window.history.pushState({ page: nextPage, anchor: nextAnchor }, "", hash);
    setNav({ page: nextPage, anchor: nextAnchor });
  };

  // Back/Forward support
  useEffect(() => {
    const onPop = (e) => {
      // read state if present, else parse hash
      if (e.state && typeof e.state.page === "string") {
        setNav({ page: e.state.page, anchor: e.state.anchor || null });
      } else {
        setNav(parseHash());
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Scroll behavior: when we land on home, optionally scroll to an anchor
  useEffect(() => {
    if (page === "home") {
      // wait for home to render
      requestAnimationFrame(() => {
        if (anchor) {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // optional: if no anchor, keep current scroll (do nothing)
          // or scroll to top if you prefer:
          // window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }
  }, [page, anchor]);

  return (
    <div>
      {page === "home" && (
        <>
          <Header />
          <Carousel />
          <Services />
          <WhoWeAre />
          <div id="services"><MarketingServicesGrid  setPage={(p) => navigate(p)} /></div>
          <Features />
          <div id="ourwork"><OurWork setPage={(p, o)=>navigate(p, o)} /></div>
          <div id="contact"><Footer /></div>
        </>
      )}

      {page === "digital" && <Digital setPage={(p, o) => navigate(p, o)} />}
      {page === "video"   && <Video   setPage={(p, o) => navigate(p, o)} />}
      {page === "motion"  && <Motion  setPage={(p, o) => navigate(p, o)} />}

      {page === "visualIdentity" && (
        <VisualIdentity setPage={(p, o) => navigate(p, o)} />
      )}
      {page === "digitalAds" && (
        <DigitalAds setPage={(p, o) => navigate(p, o)} />
      )}
      {page === "campaigns" && (
        <Campaigns setPage={(p, o) => navigate(p, o)} />
      )}
      {page === "contentCreation" && (
        <ContentCreation setPage={(p, o) => navigate(p, o)} />
      )}
    </div>
  );
}
