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
  const [screenWidth, setScreenWidth] = useState(0);
  const [isSlideMode, setIsSlideMode] = useState(true);
  const ScrollPage = isSlideMode ? FullPageScroll : "div";
  const setSlide = (isSlideMode) => {
    setIsSlideMode(isSlideMode);
  };

  const colors = {
    slate: {
      name: "slate",
      background: "bg-slate-50",
      backgroundSecondary: "bg-indigo-100",
      backgroundDark: "bg-slate-800",
      white: "bg-white",
      menu: "bg-slate-200",
      subPrimary: "bg-slate-400",
      primary: "bg-slate-500",
      primaryHover: "bg-slate-600",
      secondary: "bg-indigo-500",
      secondaryHover: "bg-indigo-600",
      darkBase: "bg-slate-700",
      textBase: "text-slate-700",
      textPrimary: "text-slate-500",
      textSubPrimary: "text-slate-400",
      textLight: "text-slate-200",
      borderBase: "border-slate-700",
      borderPrimary: "border-slate-500",
      borderLight: "border-slate-200",
      textSecondaryLight: "text-indigo-100",
      textSubSecondary: "text-indigo-400",
      textSecondary: "text-indigo-500",
      textSecondaryBase: "text-indigo-700",
      gradientFrom: "from-slate-500",
      gradientTo: "to-indigo-600",
    },
    stone: "bg-stone-400",
    pink: "bg-pink-400",
    test: {
      name: "orange",
      background: "bg-orange-50",
      menu: "bg-orange-200",
      primary: "bg-orange-500",
      primaryHover: "bg-orange-600",
    },
  };
  const [colorMode, setColorMode] = useState(colors.slate);
  const setColor = (color) => {
    setColorMode(color);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);
  return (
    <>
      {/* FEATURE: Color Palette */}
      {/* https://www.figma.com/file/r1lvBiqJeHmUc7NnfftAYJ/Portfolio-Webflow-Website-Template-(Community)?node-id=0-1&t=aZC3Hxpa4hT2P7LW-0 */}
      {/* https://www.behance.net/gallery/112340537/Personal-portfolio-template?tracking_source=search_projects%7CPERSONAL+PORTFOLIO+TEMPLATE */}
      {/* FEATURE: Skeleton loading */}
      {/* FEATURE: Mobile & Tablet View */}
      {/* FEATURE: Blurred Background */}
      {/* FEATURE: Animation element on Page Mode */}
      {/* FEATURE: Rotate portfolio on Page Mode */}
      {/* FIX: color switcher (search palette) */}
      {/* FIX: Skill section iteration (map) */}
      {/* FIX: en id content */}
      {/* FIX: Title not consistent */}
      {/* FIX: Dark Mode color */}
      {/* FIX: burger menu position (not center) */}
      {/* FIX: create section folder in component */}

      <Nav
        slideMode={isSlideMode}
        setSlide={setSlide}
        colors={colors}
        color={colorMode}
        setColor={setColor}
      />
      <ScrollPage
        slideMode={isSlideMode}
        className={`${colorMode.background} dark:bg-slate-800 text-slate-700 dark:text-slate-400 mx-auto transition-all duration-500`}
      >
        <IntroSection
          slideMode={isSlideMode}
          color={colorMode}
          screenWidth={screenWidth}
        />
        <ProfileSection slideMode={isSlideMode} color={colorMode} />
        <ServicesSection slideMode={isSlideMode} color={colorMode} />
        <EducationSection slideMode={isSlideMode} color={colorMode} />
        <SkillSection slideMode={isSlideMode} color={colorMode} />
        <PortfolioSection slideMode={isSlideMode} color={colorMode} />
        <ContactSection
          slideMode={isSlideMode}
          color={colorMode}
          screenWidth={screenWidth}
        />
      </ScrollPage>
    </>
  );
};

export default Home;
