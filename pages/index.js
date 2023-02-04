import Link from "next/link";
import { useEffect, useState } from "react";
import FullPageScroll from "@/components/FullPageScroll";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Image from "next/image";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(0);
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
          <h2 className="title-font font-semibold text-gray-900 dark:text-slate-500 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1 text-sm">
            Jl. Gagak No. 48C, Kel. Punggaloba, Kec. Kendari Barat, Kota
            Kendari, Sulawesi Tenggara 93123
          </p>
        </div>
        <div className="xl:w-1/2 px-6 lg:mt-0">
          <h2 className="font-semibold text-gray-900 dark:text-slate-500 tracking-widest mt-4 text-xs">
            EMAIL
          </h2>
          <Link
            href="mailto:muflyfadlasyihab@gmail.com"
            className="xs:bg-yellow-4000 text-indigo-500 dark:text-indigo-400 text-sm"
          >
            muflyfadlasyihab@gmail.com
          </Link>

          <h2 className="font-semibold text-gray-900 dark:text-slate-500 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <Link href="tel:+6289669644474" className="text-sm">
            0896-6964-4474
          </Link>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  return (
    <>
      <FullPageScroll className="bg-slate-50 text-slate-800 mx-auto">
        <div id="introduction" className="scroll-section">
          <div className="scroll-item xs:flex-col">
            <div className="mx-auto">
              <Image
                src="/../public/images/profile.png"
                alt="profile"
                width={300}
                height={300}
                className="mx-auto"
                // layout="responsive"
                // width={50}
                // height={50}
              />
            </div>
            <div className="xs:text-center sm:w-3/4 mx-5">
              <p className="sm:text-lg font-bold uppercase">
                Welcome to My Portfolio
              </p>
              <p className="text-4xl xs:text-2xl font-extrabold uppercase my-3">
                I&apos;m Mufly Fadla
                <span className="xs:hidden"> Syihab</span>
              </p>
              <p className="text-3xl xs:text-lg font-extrabold uppercase my-3">
                Fullstack Web {screenWidth > 640 ? "Developer" : "Dev"}
              </p>
              <p className="sm:text-lg font-semibold my-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                corrupti ipsam sunt aspernatur possimus eligendi ullam
                reiciendis quibusdam, in quos?
              </p>
            </div>
          </div>
        </div>
        <div id="profile" className="scroll-section">
          <div className="scroll-item">
            <p className="text-center text-2xl font-bold">Profile</p>
          </div>
        </div>
        <div id="education" className="scroll-section">
          <div className="scroll-item">
            <p className="text-center text-2xl font-bold">Education</p>
          </div>
        </div>
        <div id="education" className="scroll-section">
          <div className="scroll-item">
            <p className="text-center text-2xl font-bold">
              Organization & Comitee Experience
            </p>
          </div>
        </div>
        <div id="education" className="scroll-section">
          <div className="scroll-item">
            <p className="text-center text-2xl font-bold">Courses</p>
          </div>
        </div>
        <div id="skills" className="scroll-section">
          <div className="scroll-item">
            <p className="text-center text-2xl font-bold">Skill & Expertize</p>
          </div>
        </div>
        <div id="portfolio" className="scroll-section">
          <div className="scroll-item">
            <p className="text-center text-2xl font-bold">Work Experience</p>
          </div>
        </div>
        <div id="portfolio" className="scroll-section">
          <div className="scroll-item">
            <p className="text-center text-2xl font-bold">Projects</p>
          </div>
        </div>
        <div
          id="contact"
          className="scroll-section text-slate-600 dark:text-slate-400 body-font relative"
        >
          <div className="scroll-item">
            <div className="flex sm:flex-nowrap flex-wrap">
              {screenWidth > 640 && embedMap}
              <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:mt-0 text-slate-400">
                <h2 className="text-slate-900 dark:text-slate-200 text-lg mb-1 font-semibold">
                  Get in Touch With Us
                </h2>
                <p className="mb-5">
                  Need help with our service plans? Here&apos;s how you can
                  reach us
                </p>
                <div className="text-slate-600 dark:text-slate-400">
                  <Input
                    className="h-8"
                    label="Name"
                    peer="Please enter your name"
                  />
                  <Input
                    className="h-8"
                    label="Email"
                    type="email"
                    peer="Please enter your email"
                  />
                  <Input
                    className="h-8"
                    label="Whatsapp"
                    type="tel"
                    peer="Please enter a valid whatsapp number"
                  />
                  <TextArea
                    label="Message"
                    peer="Please enter your message"
                    className="h-32"
                  />
                </div>
                <div className="text-center">
                  <button className="w-full text-white bg-indigo-500 dark:bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 dark:hover:bg-indigo-500 rounded text-md">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {screenWidth < 640 && (
          <div
            id="contact"
            className="scroll-section text-slate-600 dark:text-slate-400 body-font relative"
          >
            <div className="scroll-item">
              <div className="sm:flex-nowrap flex-wrap">
                <h2 className="text-slate-900 dark:text-slate-200 text-lg text-center mb-4 font-semibold">
                  Location
                </h2>
                {embedMap}
              </div>
            </div>
          </div>
        )}
      </FullPageScroll>
    </>
  );
};

export default Home;
