import { useTranslation } from "react-i18next";
import { HiAcademicCap, HiUserGroup } from "react-icons/hi2";

const EducationSection = ({ slideMode = true, color }) => {
  const { t } = useTranslation();
  const educations = t("education.listEducation", { returnObjects: true });
  const organizations = t("education.organization", { returnObjects: true });

  return (
    <>
      <div id="education" className={slideMode ? "scroll-section" : "section"}>
        <div className={slideMode ? "scroll-item" : "section-item"}>
          <div className="flex flex-col">
            <p className="text-center text-2xl font-bold mb-8">
              {t("education.title")}
            </p>
            <div className="flex flex-row gap-x-14">
              <div className="col">
                <ol
                  className={`relative border-l ${color.borderLight} dark:${color.borderBase}`}
                >
                  {educations.map((edu, index) => {
                    return (
                      <li
                        key={index}
                        className={`min-h-44 mb-10 ml-8 block max-w-sm p-6 ${color.white} border ${color.borderLight} rounded-lg shadow-xl hover:${color.menu} dark:${color.darkBase} dark:${color.borderBase} dark:hover:${color.primaryHover} transition-all ease-in delay-0 duration-200`}
                      >
                        <span
                          className={`absolute flex items-center justify-center w-6 h-6 ${color.backgroundSecondary} rounded-full -left-3 dark:${color.secondaryHover}`}
                        >
                          <HiAcademicCap
                            className={`${color.textSecondaryBase} dark:${color.textLight}`}
                          />
                        </span>
                        <h3
                          className={`flex items-center mb-1 text-lg font-semibold ${color.textBase} dark:${color.textLight}`}
                        >
                          {edu.course}
                          {edu.label ? (
                            <span
                              className={`${color.backgroundSecondary} ${color.textSecondaryBase} text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:${color.secondaryHover} dark:${color.textSecondaryLight} ml-3`}
                            >
                              {edu.label}
                            </span>
                          ) : null}
                        </h3>
                        {edu.program ? (
                          <p
                            className={`text-sm font-normal ${color.textPrimary} dark:${color.textSubPrimary} mb-2`}
                          >
                            {edu.program}
                          </p>
                        ) : null}

                        <p
                          className={`text-sm font-normal mb-2 text-${
                            color.name
                          }-${edu.program ? "400" : "500"} dark:text-${
                            color.name
                          }-${edu.program ? "500" : "400"}`}
                        >
                          {edu.institute}
                        </p>
                        <time
                          className={`block mb-2 text-sm font-normal leading-none ${color.textSubPrimary} dark:${color.textPrimary}`}
                        >
                          {edu.time}
                        </time>
                      </li>
                    );
                  })}
                </ol>
              </div>
              <div className="col">
                <ol
                  className={`relative border-r ${color.borderLight} dark:${color.borderBase}`}
                >
                  {organizations.map((org, index) => (
                    <li
                      key={index}
                      className={`min-h-44 mb-10 mr-8 block max-w-sm p-6 ${color.white} border ${color.borderLight} rounded-lg shadow-xl hover:${color.menu} dark:${color.darkBase} dark:${color.borderBase} dark:hover:${color.primaryHover} transition-all ease-in delay-0 duration-200 `}
                    >
                      <span
                        className={`absolute flex items-center justify-center w-6 h-6 ${color.backgroundSecondary} rounded-full -right-3 dark:${color.secondaryHover}`}
                      >
                        <HiUserGroup
                          className={`${color.textSecondaryBase} dark:${color.textLight}`}
                        />
                      </span>
                      <h3
                        className={`flex items-center mb-1 text-lg font-semibold ${color.textBase} dark:${color.textLight}`}
                      >
                        {org.title}
                      </h3>
                      <p
                        className={`text-sm font-normal ${color.textPrimary} dark:${color.textSubPrimary} mb-2`}
                      >
                        {org.institute}
                      </p>
                      <p
                        className={`text-sm font-normal ${color.textSubPrimary} dark:${color.textPrimary} mb-2`}
                      >
                        {org.position}
                      </p>
                      <time
                        className={`block mb-2 text-sm font-normal leading-none ${color.textSubPrimary} dark:${color.textPrimary}`}
                      >
                        {org.time}
                      </time>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationSection;
