import { useTranslation } from "react-i18next";
import {
  HiCodeBracket,
  HiComputerDesktop,
  HiDevicePhoneMobile,
  HiDocumentText,
  HiPaintBrush,
  HiRocketLaunch,
} from "react-icons/hi2";

const ServicesSection = ({ slideMode = true }) => {
  const { t } = useTranslation();
  const services = t("services.list", { returnObjects: true });

  const icons = {
    HiCodeBracket,
    HiComputerDesktop,
    HiDevicePhoneMobile,
    HiDocumentText,
    HiPaintBrush,
    HiRocketLaunch,
  };
  // const Icon = icon ? icons[icon] : null;
  return (
    <div id="profile" className={slideMode ? "scroll-section" : "section"}>
      <div
        className={(slideMode ? "scroll-item" : "section-item") + " flex-col"}
      >
        <div className="text-center max-w-xl mb-8">
          <p className="font-bold text-3xl mb-4">{t("services.title")}</p>
          <p className="">{t("services.description")}</p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <div
                key={index}
                className="max-w-xs p-6 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b hover:bg-gradient-to-tl from-slate-500 to-indigo-600 text-slate-100">
                    <Icon className="w-10 h-10" />
                  </div>
                </div>
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white uppercase">
                  {service.title}
                </h5>
                <p className="mb-3 text-sm font-normal text-slate-500 dark:text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
