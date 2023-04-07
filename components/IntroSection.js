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
        <div className="xs:text-center sm:w-3/4 mx-5 my-4">
          <p className="sm:text-xl font-bold">Hello I&apos;m</p>
          <div className="text-4xl xs:text-2xl font-bold mt-2 mb-4">
            <p className="text-slate-500">
              Mufly <span className="text-slate-900">Fadla</span>
            </p>
          </div>
          <p className="text-lg font-semibold my-2">
            Fullstack Web {screenWidth > 640 ? "Developer" : "Dev"}
          </p>
          <p className="text-md my-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
          </p>
          <Button
            href="#"
            type={`bg-${palette.primary}-500 hover:bg-${palette.primary}-600 `}
            text="Download CV"
            icon={<HiCloudArrowDown className="w-5 h-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
