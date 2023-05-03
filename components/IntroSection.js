import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "@/components/Button";

const IntroSection = ({ slideMode = true, color, screenWidth }) => {
  const { t } = useTranslation();

  return (
    <div id="introduction" className={slideMode ? "scroll-section" : "section"}>
      <div
        className={
          (slideMode ? "scroll-item" : "section-item") + " xs:flex-col"
        }
      >
        <div className="mx-auto">
          <Image
            src={t("intro.image")}
            alt="profile"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <div className="xs:text-center sm:w-1/2 mx-5 my-6">
          <p className="sm:text-xl font-bold">{t("intro.title")}</p>
          <div className="text-4xl xs:text-2xl font-bold mt-2 mb-6">
            <p className={`${color.textPrimary}`}>
              {t("intro.firstName")}{" "}
              <span className={`${color.textBase} dark:${color.textLight}`}>
                {t("intro.middleName")}
              </span>
            </p>
          </div>
          <p className="text-lg font-semibold my-4">
            Full Stack Web {screenWidth > 640 ? "Developer" : "Dev"}
          </p>
          <p className="text-md my-4">{t("intro.description")}</p>

          <div className="mt-8 flex space-x-16">
            <Button
              href="https://wa.me/6289669644474"
              type={`${color.primary} hover:${color.primaryHover} ${color.textLight} px-10`}
              text="Hire Me!"
            />
            <div className="flex gap-x-4 my-auto">
              <Link href="https://www.instagram.com/muflifadla">
                <div
                  className={`p-2 ${color.white} hover:${color.primary} ${color.textPrimary} hover:${color.textLight} dark:${color.primaryHover} dark:${color.textLight} dark:hover:${color.primary} dark:hover:${color.textBase} rounded-lg shadow-md hover:shadow-xl transition-all ease-in delay-0 duration-300`}
                >
                  <FaInstagram className="w-6 h-6" />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/muflifadla/">
                <div
                  className={`p-2 ${color.white} hover:${color.primary} ${color.textPrimary} hover:${color.textLight} dark:${color.primaryHover} dark:${color.textLight} dark:hover:${color.primary} dark:hover:${color.textBase} rounded-lg shadow-md hover:shadow-xl transition-all ease-in delay-0 duration-300`}
                >
                  <FaLinkedin className="w-6 h-6" />
                </div>
              </Link>
              <Link href="https://www.github.com/muflifadla38">
                <div
                  className={`p-2 ${color.white} hover:${color.primary} ${color.textPrimary} hover:${color.textLight} dark:${color.primaryHover} dark:${color.textLight} dark:hover:${color.primary} dark:hover:${color.textBase} rounded-lg shadow-md hover:shadow-xl transition-all ease-in delay-0 duration-300`}
                >
                  <FaGithub className="w-6 h-6" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
