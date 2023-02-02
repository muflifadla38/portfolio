import ScrollPage from "scrollpage-js/scrollpage";
import { useEffect } from "react";

const FullPageScroll = ({ children, className }) => {
  useEffect(() => {
    new ScrollPage(".scroll-section", {
      animation: "easeInOutQuad",
      time: 1000,
      menu: "ul.side-menu",
    });
  }, []);

  return (
    <>
      <div className={"scroll-section w-full " + className}>{children}</div>
      <ul class="side-menu">
        <li className="menu-item " data-page="#introduction">
          <a></a>
        </li>
        <li className="menu-item " data-page="#profile">
          <a></a>
        </li>
        <li className="menu-item" data-page="#education">
          <a></a>
        </li>
        <li className="menu-item" data-page="#skills">
          <a></a>
        </li>
        <li className="menu-item" data-page="#contact">
          <a></a>
        </li>
      </ul>
    </>
  );
};

export default FullPageScroll;
