import ScrollPage from "scrollpage-js/scrollpage";
import { useEffect, useState } from "react";
import {
  HiAcademicCap,
  HiBeaker,
  HiBriefcase,
  HiComputerDesktop,
  HiEnvelope,
  HiHome,
  HiMoon,
  HiPaintBrush, HiSun,
  HiUser,
  HiWindow
} from "react-icons/hi2";

const FullPageScroll = ({ children, className, ...rest }) => {
  const [checked, setChecked] = useState(false);
  const [isEng, setIsEng] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSlideMode, setIsSlideMode] = useState(false);

  useEffect(() => {
    new ScrollPage(".scroll-page", {
      animation: "easeInOutQuad",
      time: 1000,
      menu: "ul.side-menu",
    });
  }, [isEng]);

  return (
    <>
      <div className={"scroll-page w-full " + className} {...rest}>
        {children}
      </div>
      <ul className="side-menu">
        <li className="menu-item " data-page="#introduction">
          <HiHome />
        </li>
        <li className="menu-item " data-page="#profile">
          <HiUser />
        </li>
        <li className="menu-item" data-page="#education">
          <HiAcademicCap />
        </li>
        <li className="menu-item" data-page="#skills">
          <HiBeaker />
        </li>
        <li className="menu-item" data-page="#portfolio">
          <HiBriefcase />
        </li>
        <li className="menu-item" data-page="#contact">
          <HiEnvelope />
        </li>
      </ul>
      <div className="side-menu">
        <div className="menu-item block absolute -top-40 right-4">
          <input
            type="checkbox"
            id="tool-toggler"
            className="tool-toggler opacity-0 absolute w-10 h-10 -ml-2 -mt-2 z-20"
            onChange={() => setChecked(true)}
          />
          <label
            htmlFor="tool-toggler"
            className="block absolute z-20 w-6 h-1 mt-2 before:-top-2 after:top-2"
          />

          <ul>
            <li
              className="menu-item tool-item absolute inset-0 m-auto block opacity-0 duration-500 z-10"
              onClick={() => setIsSlideMode(!isSlideMode)}
            >
              <a href="#">
                {isSlideMode ? <HiComputerDesktop /> : <HiWindow />}
              </a>
            </li>
            <li
              className="menu-item tool-item absolute inset-0 m-auto block opacity-0 duration-500 z-10"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <a href="#">{isDarkMode ? <HiSun /> : <HiMoon />}</a>
            </li>
            <li
              className="menu-item tool-item absolute inset-0 m-auto block opacity-0 duration-500 z-10"
              onClick={() => setIsEng(!isEng)}
            >
              <a href="#">
                <p className="w-4 h-4 sm:w-6 sm:h-6 font-bold text-indigo-500 dark:text-slate-200 uppercase text-center">
                  {isEng ? "en" : "id"}
                </p>
              </a>
            </li>
            <li className="menu-item tool-item absolute inset-0 m-auto block opacity-0 duration-500 z-10">
              <a href="#">
                <HiPaintBrush />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FullPageScroll;
