import { useTranslation } from "react-i18next";
import Link from "next/link";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";

const ContactSection = ({ slideMode = true, screenWidth }) => {
  const { t } = useTranslation();
  const embedMap = (
    <div className="lg:w-2/3 md:w-2/3 sm:w-full xs:w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 sm:p-8 xs:pt-64 xs:p-4 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0 grayscale-[.4] dark:grayscale contract-[1.2] dark:contrast-[.83] dark:invert-[.92] opacity-50 dark:opacity-100"
        frameBorder="0"
        title="map"
        marginHeight="0"
        marginWidth="0"
        scrolling="no"
        loading="lazy"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=-3.9684405,122.5637293&ie=UTF8&t=&z=16&iwloc=B&output=embed"
      />
      <div className="bg-slate-100 dark:bg-slate-800 relative flex flex-wrap py-6 w-full rounded shadow-md">
        <div className="xl:w-1/2 px-6">
          <p className="title-font font-semibold text-gray-900 dark:text-slate-500 tracking-widest text-xs uppercase">
            {t("contact.map.addressLabel")}
          </p>
          <Link
            href="https://goo.gl/maps/Zab6ijkpixPNX2Cq6"
            className="mt-1 text-sm"
          >
            {t("contact.map.address")}
          </Link>
        </div>
        <div className="xl:w-1/2 px-6 lg:mt-0">
          <p className="font-semibold text-gray-900 dark:text-slate-500 tracking-widest mt-4 text-xs uppercase">
            {t("contact.map.emailLabel")}
          </p>
          <Link
            href="mailto:muflyfadlasyihab@gmail.com"
            className="xs:bg-yellow-4000 text-indigo-500 dark:text-indigo-400 text-sm"
          >
            {t("contact.map.email")}
          </Link>

          <p className="font-semibold text-gray-900 dark:text-slate-500 tracking-widest text-xs mt-4 uppercase">
            {t("contact.map.phoneLabel")}
          </p>
          <Link href="tel:+6289669644474" className="text-sm">
            {t("contact.map.phone")}
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        id="contact"
        className={
          (slideMode ? "scroll-section" : "section") +
          " text-slate-600 dark:text-slate-400 body-font relative"
        }
      >
        <div className={slideMode ? "scroll-item" : "section-item"}>
          <div className="flex sm:flex-nowrap flex-wrap">
            {screenWidth > 640 && embedMap}
            <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:mt-0 text-slate-400">
              <p className="text-slate-900 dark:text-slate-200 text-lg mb-1 font-semibold">
                {t("contact.subtitle")}
              </p>
              <p className="mb-5">{t("contact.description")}</p>
              <div className="text-slate-600 dark:text-slate-400">
                <Input
                  className="h-8"
                  label={t("contact.form.name")}
                  peer="Please enter your name"
                />
                <Input
                  className="h-8"
                  label={t("contact.form.email")}
                  type="email"
                  peer="Please enter your email"
                />
                <Input
                  className="h-8"
                  label={t("contact.form.whatsapp")}
                  type="tel"
                  peer="Please enter a valid whatsapp number"
                />
                <TextArea
                  label={t("contact.form.message")}
                  peer="Please enter your message"
                  className="h-32"
                />
              </div>
              <div className="text-center">
                <Button
                  href="/"
                  type="bg-slate-500 hover:bg-slate-600 text-slate-100 w-full rounded border-0 focus:outline-none"
                  text={t("contact.form.button")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {screenWidth < 640 && (
        <div
          id="contact"
          className={
            (slideMode ? "scroll-section" : "section") +
            " text-slate-600 dark:text-slate-400 body-font relative"
          }
        >
          <div
            className={
              (slideMode ? "scroll-item" : "section-item") + " flex-col"
            }
          >
            <div className="sm:flex-nowrap flex-wrap">
              <p className="text-slate-900 dark:text-slate-200 text-lg text-center mb-4 font-semibold">
                {t("contact.title")}
              </p>
              {embedMap}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;
