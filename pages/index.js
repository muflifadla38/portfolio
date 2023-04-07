import { useEffect, useState } from "react";
import FullPageScroll from "@/components/FullPageScroll";
import IntroSection from "@/components/IntroSection";
import ContactSection from "@/components/ContactSection";
import ProfileSection from "@/components/ProfileSection";
import EducationSection from "@/components/EducationSection";
import SkillSection from "@/components/SkillSection";
import PortfolioSection from "@/components/PortfolioSection";

const Home = () => {
  const palette = {
    primary: "slate",
    secondary: "indigo",
  };

  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  return (
    <>
      <FullPageScroll className="bg-slate-50 blue:bg-indigo-500 text-slate-800 mx-auto">
        <IntroSection screenWidth={screenWidth} palette={palette} />
        <ProfileSection />
        <EducationSection />
        <SkillSection />
        <PortfolioSection />
        <ContactSection screenWidth={screenWidth} />
      </FullPageScroll>
    </>
  );
};

export default Home;
