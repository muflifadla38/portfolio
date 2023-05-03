import { useTranslation } from "react-i18next";
import { HiCloudArrowDown } from "react-icons/hi2";
import Button from "./Button";
import CircularProgress from "./CircularProgress";

const ProfileSection = ({ slideMode = true, color }) => {
  const { t } = useTranslation();

  return (
    <div id="profile" className={slideMode ? "scroll-section" : "section"}>
      <div className={slideMode ? "scroll-item" : "section-item"}>
        <div className="flex justify-center">
          <div className="flex-col w-2/5 mr-24">
            <p className="text-3xl font-bold mb-8">{t("about.title")}</p>
            <p className="text-md">{t("about.description.firstParagraph")}</p>
            <br />
            <p>{t("about.description.secondParagraph")}</p>
            <div className="mt-8 flex space-x-6">
              <Button
                href="#portfolio"
                type={`${color.primary} hover:${color.primaryHover} ${color.textLight}`}
                text={t("about.button")}
              />
              <Button
                href="./files/CV.pdf"
                type={`dark:${color.textLight} dark:hover:${color.subPrimary} dark:hover:${color.textBase} hover:${color.primaryHover} border-2 ${color.borderPrimary} hover:border-current ${color.textPrimary} hover:${color.textLight} `}
                text="Download CV"
                icon={<HiCloudArrowDown className="w-5 h-5" />}
              />
            </div>
          </div>

          <div className="flex items-center flex-wrap justify-evenly gap-8 w-72 -rotate-12 ml-24">
            <div
              className={`flex items-center justify-center overflow-hidden rounded-full shadow-2xl dark:${color.darkBase} dark:hover:${color.primaryHover}`}
            >
              <CircularProgress
                barColor={`${color.textPrimary}`}
                className="p-1.5"
              />
              <span className="absolute text-sm font-semibold text-center rotate-12">
                {t("about.progress.FE")}
              </span>
            </div>
            <div
              className={`flex items-center justify-center overflow-hidden rounded-full shadow-2xl dark:${color.darkBase} dark:hover:${color.primaryHover}`}
            >
              <CircularProgress
                barColor={`${color.textSubSecondary}`}
                className="p-1.5"
              />
              <span className="absolute text-sm font-semibold text-center rotate-12">
                {t("about.progress.BE")}
              </span>
            </div>
            <div
              className={`flex items-center justify-center overflow-hidden rounded-full shadow-2xl dark:${color.darkBase} dark:hover:${color.primaryHover}`}
            >
              <CircularProgress
                barColor={`${color.textSubPrimary}`}
                className="p-1.5"
              />
              <span className="absolute text-sm font-semibold text-center rotate-12">
                {t("about.progress.UI")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
