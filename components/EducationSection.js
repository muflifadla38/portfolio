import { useTranslation } from "react-i18next";
import { HiAcademicCap, HiUserGroup } from "react-icons/hi2";

const EducationSection = ({ slideMode = true }) => {
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
                <ol className="relative border-l border-slate-200 dark:border-slate-700">
                  {educations.map((edu, index) => {
                    return (
                      <li
                        key={index}
                        className="min-h-44 mb-10 ml-8 block max-w-sm p-6 bg-white border border-slate-200 rounded-lg shadow-xl hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 transition-all ease-in delay-0 duration-200 "
                      >
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 dark:ring-slate-900 dark:bg-indigo-900">
                          <HiAcademicCap className="fill-indigo-800 dark:fill-slate-300" />
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                          {edu.course}
                          {edu.label ? (
                            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 ml-3">
                              {edu.label}
                            </span>
                          ) : null}
                        </h3>
                        {edu.program ? (
                          <p className="text-sm font-normal text-slate-500 dark:text-slate-400 mb-2">
                            {edu.program}
                          </p>
                        ) : null}

                        <p
                          className={
                            "text-sm font-normal mb-2 " +
                            "text-slate-" +
                            (edu.program ? "400" : "500") +
                            " dark:text-slate-" +
                            (edu.program ? "500" : "400")
                          }
                        >
                          {edu.institute}
                        </p>
                        <time className="block mb-2 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
                          {edu.time}
                        </time>
                      </li>
                    );
                  })}
                  {/* <li className="min-h-44 mb-10 ml-8 block max-w-sm p-6 bg-white border border-slate-200 rounded-lg shadow-xl hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 transition-all ease-in delay-0 duration-200 ">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 dark:ring-slate-900 dark:bg-indigo-900">
                      <HiAcademicCap className="fill-indigo-800 dark:fill-slate-300" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                      Front-End Web Developer
                    </h3>
                    <p className="text-sm font-normal text-slate-500 dark:text-slate-400 mb-2">
                      Bootcamp Baparekraf Digital Talent
                    </p>
                    <p className="text-sm font-normal text-slate-400 dark:text-slate-500 mb-2">
                      Dicoding
                    </p>
                    <time className="block mb-2 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
                      Juli 2020 - November 2020
                    </time>
                  </li>*/}
                </ol>
              </div>
              <div className="col">
                <ol className="relative border-r border-slate-200 dark:border-slate-700">
                  {organizations.map((org, index) => (
                    <li
                      key={index}
                      className="min-h-44 mb-10 mr-8 block max-w-sm p-6 bg-white border border-slate-200 rounded-lg shadow-xl hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 transition-all ease-in delay-0 duration-200 "
                    >
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -right-3 dark:ring-slate-900 dark:bg-indigo-900">
                        <HiUserGroup className="fill-indigo-800 dark:fill-slate-300" />
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                        {org.title}
                      </h3>
                      <p className="text-sm font-normal text-slate-500 dark:text-slate-400 mb-2">
                        {org.institute}
                      </p>
                      <p className="text-sm font-normal text-slate-400 dark:text-slate-500 mb-2">
                        {org.position}
                      </p>
                      <time className="block mb-2 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
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
