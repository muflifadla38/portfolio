import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import {
  HiComputerDesktop,
  HiMoon,
  HiSun,
  HiPaintBrush,
  HiWindow,
} from "react-icons/hi2";
import "@/utils/i18n";

const Nav = ({ slideMode, setSlide, colors, color, setColor }) => {
  const [checked, setChecked] = useState(false);
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState();
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === "id" ? "en" : "id";
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    if (!slideMode) document.body.style.overflow = "visible";
    resolvedTheme === "dark"
      ? setThemeIcon(<HiSun />)
      : setThemeIcon(<HiMoon />);
  }, [slideMode, theme, resolvedTheme]);

  return (
    <nav>
      <div className="side-menu">
        <div className="menu-item block absolute -top-40 right-4">
          <input
            type="checkbox"
            id="tool-toggler"
            className="tool-toggler opacity-0 absolute w-10 h-10 -ml-2 -mt-2 z-30"
            onChange={() => setChecked(true)}
          />
          <label
            htmlFor="tool-toggler"
            className="block absolute w-6 h-1 mt-2 before:-top-2 after:top-2"
          />

          <ul className="z-20">
            <li
              className="menu-item tool-item absolute inset-0 m-auto block opacity-0 duration-500"
              onClick={() => setSlide(!slideMode)}
            >
              <button>
                {slideMode ? <HiWindow /> : <HiComputerDesktop />}
              </button>
            </li>
            <li
              className="menu-item tool-item absolute inset-0 m-auto block opacity-0 duration-500"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              <button>{themeIcon}</button>
            </li>
            <li
              className="menu-item tool-item absolute inset-0 m-auto block opacity-0 duration-500"
              onClick={handleChangeLanguage}
            >
              <button>
                <p className="w-4 h-4 sm:w-6 sm:h-6 font-bold text-indigo-500 dark:text-slate-200 uppercase text-center">
                  {i18n.language === "id" ? "en" : "id"}
                </p>
              </button>
            </li>
            <li className="menu-item tool-item color-switcher absolute inset-0 m-auto block opacity-0 duration-500">
              <button>
                <HiPaintBrush />
              </button>
              <div
                className={`color-menu opacity-0 p-2 ${color.menu} shadow-md rounded-lg flex absolute bottom-20 right-4 rotate-[70deg]`}
              >
                <button
                  className={`p-2 mx-1 rounded-md ${colors.slate.primary}`}
                  onClick={() => setColor(colors.slate)}
                ></button>
                <button
                  className={`p-2 mx-1 rounded-md  ${colors.stone}`}
                  onClick={() => setColor(colors.stone)}
                ></button>
                <button
                  className={`p-2 mx-1 rounded-md  ${colors.pink}`}
                  onClick={() => setColor(colors.pink)}
                ></button>
                <button
                  className={`p-2 mx-1 rounded-md ${colors.test.primary}`}
                  onClick={() => setColor(colors.test)}
                ></button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
