import { HiCloudArrowDown } from "react-icons/hi2";
import Button from "./Button";
import CircularProgress from "./CircularProgress";

const ProfileSection = () => (
  <div id="profile" className="scroll-section">
    <div className="scroll-item">
      <div className="flex justify-center">
        <div className="flex-col w-2/5 mr-24">
          <p className="text-3xl font-bold mb-8">About Me</p>
          <p className="text-md">
            Saya adalah seorang Fullstack Web Developer dengan pengalaman lebih
            dari 1 tahun dalam mengembangkan berbagai aplikasi web dengan
            teknologi modern seperti Laravel, ReactJS, NextJS dan Node.js.
          </p>
          <br />
          <p>
            Saya memiliki passion yang besar dalam membangun solusi teknologi
            dan meningkatkan pengalaman pengguna.
          </p>
          <div className="mt-8 flex space-x-6">
            <Button
              href="#portfolio"
              scroll={false}
              type={`bg-slate-500 hover:bg-slate-600 text-slate-100`}
              text="View Projects"
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
            <span class="absolute text-sm font-semibold text-center rotate-12">
              Front-End
            </span>
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-full shadow-2xl">
            <CircularProgress barColor="text-indigo-400" className="p-1.5" />
            <span class="absolute text-sm font-semibold text-center rotate-12">
              Back-End
            </span>
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-full shadow-2xl">
            <CircularProgress barColor="text-slate-400" className="p-1.5" />
            <span class="absolute text-sm font-semibold text-center rotate-12">
              UI/ UX
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileSection;
