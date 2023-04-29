import { useTranslation } from "react-i18next";
import { HiCloudArrowDown } from "react-icons/hi2";
import Button from "./Button";
import CircularProgress from "./CircularProgress";

const ProfileSection = ({ slideMode = true }) => {
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
                type={`bg-slate-500 hover:bg-slate-600 text-slate-100`}
                text={t("about.button")}
              />
              <Button
                href="./files/CV.pdf"
                type={`hover:bg-slate-600 border-2 border-slate-500 text-slate-500 hover:text-slate-100 `}
                text="Download CV"
                icon={<HiCloudArrowDown className="w-5 h-5" />}
              />
            </div>
          </div>

          <div className="flex items-center flex-wrap justify-evenly gap-8 w-72 -rotate-12 ml-24">
            <div className="flex items-center justify-center overflow-hidden rounded-full shadow-2xl">
              <CircularProgress barColor="text-slate-500" className="p-1.5" />
              <span className="absolute text-sm font-semibold text-center rotate-12">
                {t("about.progress.FE")}
              </span>
            </div>
            <div className="flex items-center justify-center overflow-hidden rounded-full shadow-2xl">
              <CircularProgress barColor="text-indigo-400" className="p-1.5" />
              <span className="absolute text-sm font-semibold text-center rotate-12">
                {t("about.progress.BE")}
              </span>
            </div>
            <div className="flex items-center justify-center overflow-hidden rounded-full shadow-2xl">
              <CircularProgress barColor="text-slate-400" className="p-1.5" />
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
