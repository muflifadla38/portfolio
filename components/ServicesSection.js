import { useTranslation } from "react-i18next";
import {
  HiCodeBracket,
  HiComputerDesktop,
  HiDevicePhoneMobile,
  HiDocumentText,
  HiPaintBrush,
  HiRocketLaunch,
} from "react-icons/hi2";

const ServicesSection = ({ slideMode = true, color }) => {
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
                className={`max-w-xs p-6 ${color.white} border  rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover}
                dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b hover:bg-gradient-to-tl ${color.gradientFrom} ${color.gradientTo} ${color.textLight}`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>
                </div>
                <h5
                  className={`mb-2 text-lg font-semibold tracking-tight ${color.textBase} dark:${color.textLight} uppercase`}
                >
                  {service.title}
                </h5>
                <p
                  className={`mb-3 text-sm font-normal ${color.textPrimary} dark:${color.textSubPrimary}`}
                >
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
