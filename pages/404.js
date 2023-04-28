import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import { NotFoundIcon } from "@/components/Icons";

const NotFound404 = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-blue-100 dark:bg-slate-700 flex items-center p-5 lg:p-20 overflow-hidden relative rounded-3xl">
        <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white dark:bg-slate-800 shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
          <div className="w-full md:w-1/2">
            <div className="mb-10 lg:mb-20"></div>
            <div className="mb-10 md:mb-20 text-slate-500 dark:text-slate-400 font-light">
              <h1 className="font-black uppercase text-3xl lg:text-5xl text-slate-500 mb-10">
                You seem to be lost!
              </h1>
              <p>The page you&apos;re looking for isn&apos;t available.</p>
              <p>Try searching again or use the Go Back button below.</p>
            </div>
            <div className="mb-20 md:mb-0">
              <Link href="/">
                <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-slate-500 hover:text-sky-600 inline-flex">
                  <HiArrowLeft className="mr-2 w-5 h-6" />
                  <span>Go Back</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <NotFoundIcon />
          </div>
        </div>
        <div className="w-64 md:w-96 h-96 md:h-full bg-sky-200 dark:bg-sky-800 bg-opacity-30 dark:bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
        <div className="w-96 h-full bg-yellow-200 dark:bg-slate-400 bg-opacity-20 dark:bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
      </div>
    </div>
  );
};

export default NotFound404;
