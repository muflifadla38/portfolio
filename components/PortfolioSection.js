import React from "react";

const PortfolioSection = () => {
  return (
    <>
      <div id="portfolio" className="scroll-section">
        <div className="scroll-item">
          {/* ADD work content */}
          <p className="text-center text-2xl font-bold">Work Experience</p>
        </div>
      </div>
      <div id="portfolio" className="scroll-section">
        <div className="scroll-item">
          {/* ADD project content */}
          <p className="text-center text-2xl font-bold">Projects</p>
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
