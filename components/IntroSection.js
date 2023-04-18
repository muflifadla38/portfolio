import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import profileImg from "../public/images/profile.png";
import Button from "@/components/Button";
import Link from "next/link";

const IntroSection = ({ screenWidth, palette }) => {
  return (
    <div id="introduction" className="scroll-section">
      <div className="scroll-item xs:flex-col">
        <div className="mx-auto">
          <Image
            src={profileImg}
            alt="profile"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <div className="xs:text-center sm:w-1/2 mx-5 my-6">
          <p className="sm:text-xl font-bold">Hello I&apos;m</p>
          <div className="text-4xl xs:text-2xl font-bold mt-2 mb-6">
            <p className="text-slate-500">
              Mufly <span className="text-slate-900">Fadla</span>
            </p>
          </div>
          <p className="text-lg font-semibold my-4">
            Fullstack Web {screenWidth > 640 ? "Developer" : "Dev"}
          </p>
          <p className="text-md my-4">
            Halo, saya seorang Fullstack Web Developer, saya menyukai tantangan dalam
            menciptakan solusi kreatif dan inovatif untuk masalah teknologi.
            Situs web ini adalah tempat saya menunjukkan karya saya dan
            memperkenalkan diri kepada Anda.
          </p>

          <div className="mt-8 flex space-x-16">
            <Button
              href="https://wa.me/6289669644474"
              type={`bg-slate-500 hover:bg-${palette.primary}-600 text-slate-100 px-10`}
              text="Hire Me!"
            />
            <div className="flex gap-x-4 my-auto">
              <Link href="https://www.instagram.com/muflifadla">
                <div className="p-2 bg-white text-slate-500 border border-1 rounded-lg shadow-md border-slate-50 dark:border-slate-700 hover:bg-slate-500 hover:text-slate-100 hover:shadow-lg transition-all ease-in delay-0 duration-300">
                  <FaInstagram className="w-6 h-6" />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/muflifadla/">
                <div className="p-2 bg-white text-slate-500 border border-1 rounded-lg shadow-md border-slate-50 dark:border-slate-700 hover:bg-slate-500 hover:text-slate-100 hover:shadow-lg transition-all ease-in delay-0 duration-300">
                  <FaLinkedin className="w-6 h-6" />
                </div>
              </Link>
              <Link href="https://www.github.com/muflifadla38">
                <div className="p-2 bg-white text-slate-500 border border-1 rounded-lg shadow-md border-slate-50 dark:border-slate-700 hover:bg-slate-500 hover:text-slate-100 hover:shadow-lg transition-all ease-in delay-0 duration-300">
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
