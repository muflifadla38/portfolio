import {
  HiCodeBracket,
  HiComputerDesktop,
  HiDevicePhoneMobile,
  HiDocumentText,
  HiPaintBrush,
  HiRocketLaunch,
} from "react-icons/hi2";

const ServicesSection = () => {
  return (
    <div id="profile" className="scroll-section">
      <div className="scroll-item flex-col">
        <div className="text-center max-w-xl mb-8">
          <p className="font-bold text-3xl mb-4">Services</p>
          <p className="">
            Menyediakan solusi kreatif untuk pengembangan dan perancangan situs
            web serta meningkatkan kinerja di mesin pencari.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="max-w-xs p-6 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b hover:bg-gradient-to-tl from-slate-500 to-indigo-600 text-slate-100">
                <HiDevicePhoneMobile className="w-10 h-10" />
              </div>
            </div>
            <h5 className="mb-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white uppercase">
              UI/IX Design
            </h5>
            <p className="mb-3 text-sm font-normal text-slate-500 dark:text-slate-400">
              Membuat pengalaman pengguna yang baik di situs web atau aplikasi
            </p>
          </div>
          <div className="max-w-xs p-6 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b hover:bg-gradient-to-tl from-slate-500 to-indigo-600 text-slate-100">
                <HiComputerDesktop className="w-10 h-10" />
              </div>
            </div>
            <h5 className="mb-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white uppercase">
              Web Design
            </h5>
            <p className="mb-3 text-sm font-normal text-slate-500 dark:text-slate-400">
              Membuat desain situs web yang menarik dan fungsional
            </p>
          </div>
          <div className="max-w-xs p-6 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b hover:bg-gradient-to-tl from-slate-500 to-indigo-600 text-slate-100">
                <HiCodeBracket className="w-10 h-10" />
              </div>
            </div>
            <h5 className="mb-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white uppercase">
              Web Development
            </h5>
            <p className="mb-3 text-sm font-normal text-slate-500 dark:text-slate-400">
              Membangun situs web yang berfungsi dan interaktif
            </p>
          </div>
          <div className="max-w-xs p-6 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b hover:bg-gradient-to-tl from-slate-500 to-indigo-600 text-slate-100">
                <HiPaintBrush className="w-10 h-10" />
              </div>
            </div>
            <h5 className="mb-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white uppercase">
              Graphic Design
            </h5>
            <p className="mb-3 text-sm font-normal text-slate-500 dark:text-slate-400">
              Membuat desain grafis untuk situs web dan media sosial
            </p>
          </div>
          <div className="max-w-xs p-6 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b hover:bg-gradient-to-tl from-slate-500 to-indigo-600 text-slate-100">
                <HiRocketLaunch className="w-10 h-10" />
              </div>
            </div>
            <h5 className="mb-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white uppercase">
              Search Engine Optimization
            </h5>
            <p className="mb-3 text-sm font-normal text-slate-500 dark:text-slate-400">
              Meningkatkan peringkat situs web di mesin pencari
            </p>
          </div>
          <div className="max-w-xs p-6 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b hover:bg-gradient-to-tl from-slate-500 to-indigo-600 text-slate-100">
                <HiDocumentText className="w-10 h-10" />
              </div>
            </div>
            <h5 className="mb-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white uppercase">
              Content Management System
            </h5>
            <p className="mb-3 text-sm font-normal text-slate-500 dark:text-slate-400">
              Mengembangkan sistem manajemen konten untuk situs web
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
