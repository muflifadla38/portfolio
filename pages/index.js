import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import FullPageScroll from "@/components/FullPageScroll";
import IntroSection from "@/components/IntroSection";
import ContactSection from "@/components/ContactSection";
import ProfileSection from "@/components/ProfileSection";
import EducationSection from "@/components/EducationSection";
import SkillSection from "@/components/SkillSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";

const Home = () => {
  const [isSlideMode, setIsSlideMode] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);

  const setSlide = (isSlideMode) => {
    setIsSlideMode(isSlideMode);
  };

  const ScrollPage = isSlideMode ? FullPageScroll : "div";

  const palette = {
    primary: "slate",
    secondary: "indigo",
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);
  return (
    <>
      {/* FEATURE: Color Palette */}
      {/* FEATURE: Skeleton loading */}
      {/* FEATURE: Mobile & Tablet View */}
      {/* FEATURE: Blurred Background */}
      {/* FEATURE: Animation element on Page Mode */}
      {/* FEATURE: Rotate portfolio on Page Mode */}
      {/* FIX: en id content */}
      {/* FIX: Title not consistent */}
      {/* FIX: Dark Mode color */}
      {/* FIX: burger menu position (not center) */}
      {/* FIX: create section folder in component */}

      <Nav slideMode={isSlideMode} setSlide={setSlide} />
      <ScrollPage
        slideMode={isSlideMode}
        className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-400 mx-auto transition-all duration-500"
      >
        <IntroSection
          slideMode={isSlideMode}
          screenWidth={screenWidth}
          palette={palette}
        />
        <ProfileSection slideMode={isSlideMode} />
        <ServicesSection slideMode={isSlideMode} />
        <EducationSection slideMode={isSlideMode} />
        <SkillSection slideMode={isSlideMode} />
        <PortfolioSection slideMode={isSlideMode} />
        <ContactSection slideMode={isSlideMode} screenWidth={screenWidth} />
      </ScrollPage>
    </>
  );
};

export default Home;
