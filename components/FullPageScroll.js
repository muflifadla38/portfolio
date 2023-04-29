import ScrollPage from "scrollpage-js/scrollpage";
import { useEffect } from "react";
import {
  HiAcademicCap,
  HiBeaker,
  HiBriefcase,
  HiEnvelope,
  HiHome,
  HiUser,
} from "react-icons/hi2";

const FullPageScroll = ({ slideMode, children, className, ...rest }) => {
  useEffect(() => {
    new ScrollPage(".scroll-page", {
      animation: "easeInOutQuad",
      time: 1000,
      scrollBar: false,
      menu: "ul.side-menu",
    });
  }, []);
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
    </>
  );
};

export default FullPageScroll;
