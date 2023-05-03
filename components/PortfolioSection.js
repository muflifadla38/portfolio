import { useTranslation } from "react-i18next";
import Image from "next/image";
import Button from "@/components/Button";

const PortfolioSection = ({ slideMode = true, color }) => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });

  return (
    <>
      <div id="portfolio" className={slideMode ? "scroll-section" : "section"}>
        <div
          className={(slideMode ? "scroll-item" : "section-item") + " flex-col"}
        >
          {/* FIX: content */}
          {/* https://www.bintangyoga.dev/ */}
          {/* https://www.figma.com/file/ADOgJ4ZLt13YvVKfrwi9cm/Resume-Web-Design-(Community)?node-id=0-1&t=oZQ3G5aWLYbuhop9-0 */}
          <p className="text-center text-2xl font-bold mb-8">
            {t("projects.title")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex rounded-xl shadow-md border border-1 border-inherit dark:border-transparent ${color.white} dark:${color.darkBase} dark:hover:${color.primaryHover} hover:shadow-2xl transition-all ease-in delay-0 duration-300 px-4 pt-4`}
              >
                <div className="my-auto w-56">
                  <p className="text-xl font-bold mb-4">{project.title}</p>
                  <p className="mb-4">{project.description}</p>
                  <Button
                    href="#"
                    type={`${color.primary} ${color.textLight} hover:${color.primaryHover}`}
                    text={project.button}
                  />
                </div>
                <div className="flex justify-center mt-8 ">
                  <Image
                    src={project.image}
                    width={300}
                    height={150}
                    className="rounded-lg"
                    alt="projects"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
