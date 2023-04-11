import React from "react";

const EducationSection = () => {
  return (
    <>
      <div id="education" className="scroll-section">
        <div className="scroll-item">
          {/* ADD edu content */}
          <p className="text-center text-2xl font-bold">Education</p>
        </div>
      </div>
      <div id="education" className="scroll-section">
        <div className="scroll-item">
          {/* ADD org content */}
          <p className="text-center text-2xl font-bold">
            Organization & Committee Experience
          </p>
        </div>
      </div>
      <div id="education" className="scroll-section">
        <div className="scroll-item">
          {/* ADD course content */}
          <p className="text-center text-2xl font-bold">Courses</p>
        </div>
      </div>
    </>
  );
};

export default EducationSection;
