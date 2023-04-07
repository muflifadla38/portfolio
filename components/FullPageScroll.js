import ScrollPage from "scrollpage-js/scrollpage";
import {
  HiBeaker,
  HiBookOpen,
  HiBriefcase,
  HiEnvelope,
  HiHome,
  HiUser,
} from "react-icons/hi2";
import { useEffect } from "react";

const FullPageScroll = ({ children, className, ...rest }) => {
  useEffect(() => {
    new ScrollPage(".scroll-page", {
      animation: "easeInOutQuad",
      time: 1000,
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
          <HiBookOpen />
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
