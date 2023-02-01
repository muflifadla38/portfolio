import ScrollPage from "scrollpage-js/scrollpage";
import { useEffect } from "react";

const FullPageScroll = ({ children, className }) => {
  useEffect(() => {
    new ScrollPage(".scroll-section", {
      animation: "easeInOutQuad",
      time: 1000,
      menu: "ul.side-menu",
      // scrollBar: true, //show or hide scrollbar (default false),
      // pageSelectedClass:"active",//css class name for page element if active or selected (default 'active')
      // menuSelectedClass:"active",//css class name for menu element if active or selected (default 'active')
    });
  }, []);

  return (
    <>
      <div className={"scroll-section w-full " + className}>{children}</div>
      <ul class="side-menu">
        <li className="menu-item " data-page="#profile">
          <a></a>
        </li>
        <li className="menu-item" data-page="#education">
          <a></a>
        </li>
        <li className="menu-item" data-page="#skills">
          <a></a>
        </li>
      </ul>
    </>
  );
};

export default FullPageScroll;
