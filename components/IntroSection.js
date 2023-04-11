import Image from "next/image";
import profileImg from "../public/images/profile.png";
import Button from "@/components/Button";
import { HiCloudArrowDown } from "react-icons/hi2";

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
            Halo, saya seorang web developer, saya menyukai tantangan dalam
            menciptakan solusi kreatif dan inovatif untuk masalah teknologi.
            Situs web ini adalah tempat saya menunjukkan karya saya dan
            memperkenalkan diri kepada Anda.
          </p>
          <div className="mt-8 flex space-x-6">
            {/* ADD button link */}
            <Button
              href="#"
              type={`bg-${palette.primary}-500 hover:bg-${palette.primary}-600 `}
              text="Download CV"
              icon={<HiCloudArrowDown className="w-5 h-5" />}
            />
            <Button
              href="#"
              type={`bg-${palette.secondary}-500 hover:bg-${palette.secondary}-600 `}
              text="Hire Me!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
