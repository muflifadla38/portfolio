import { HiAcademicCap, HiUserGroup } from "react-icons/hi2";

const EducationSection = () => {
  return (
    <>
      <div id="education" className="scroll-section">
        <div className="scroll-item">
          <div className="flex flex-col">
            <p className="text-center text-2xl font-bold uppercase mb-8">
              Pendidikan & Organisasi
            </p>
            <div className="flex flex-row gap-x-14">
              <div className="col">
                <ol className="relative border-l border-slate-200 dark:border-slate-700">
                  <li className="min-h-44 mb-10 ml-8 block max-w-sm p-6 bg-white border border-slate-200 rounded-lg shadow-xl hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 transition-all ease-in delay-0 duration-200 ">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 dark:ring-slate-900 dark:bg-indigo-900">
                      <HiAcademicCap className="fill-indigo-800 dark:fill-slate-300" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                      S1 Geofisika
                      <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 ml-3">
                        Terbaru
                      </span>
                    </h3>
                    <p className="text-sm font-normal text-slate-500 dark:text-slate-400 mb-2">
                      Universitas Hasanuddin
                    </p>
                    <time className="block mb-2 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
                      Agustus 2016 - Agustus 2021
                    </time>
                  </li>
                  <li className="min-h-44 mb-10 ml-8 block max-w-sm p-6 bg-white border border-slate-200 rounded-lg shadow-xl hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 transition-all ease-in delay-0 duration-200 ">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 dark:ring-slate-900 dark:bg-indigo-900">
                      <HiAcademicCap className="fill-indigo-800 dark:fill-slate-300" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                      Front-End Web Developer
                    </h3>
                    <p className="text-sm font-normal text-slate-500 dark:text-slate-400 mb-2">
                      Bootcamp Baparekraf Digital Talent
                    </p>
                    <p className="text-sm font-normal text-slate-400 dark:text-slate-500 mb-2">
                      Dicoding
                    </p>
                    <time className="block mb-2 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
                      Juli 2020 - November 2020
                    </time>
                  </li>
                  <li className="min-h-44 ml-8 block max-w-sm p-6 bg-white border border-slate-200 rounded-lg shadow-xl hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 transition-all ease-in delay-0 duration-200 ">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 dark:ring-slate-900 dark:bg-indigo-900">
                      <HiAcademicCap className="fill-indigo-800 dark:fill-slate-300" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                      Data Science & Machine Learning Dengan Python
                    </h3>
                    <p className="text-sm font-normal text-slate-500 dark:text-slate-400 mb-2">
                      Workshop
                    </p>
                    <p className="text-sm font-normal text-slate-400 dark:text-slate-500 mb-2">
                      Babastudio
                    </p>
                    <time className="block mb-2 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
                      Agustus 2020 - September 2020
                    </time>
                  </li>
                </ol>
              </div>
              <div className="col">
                <ol className="relative border-r border-slate-200 dark:border-slate-700">
                  <li className="min-h-44 mb-10 mr-8 block max-w-sm p-6 bg-white border border-slate-200 rounded-lg shadow-xl hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 transition-all ease-in delay-0 duration-200 ">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -right-3 dark:ring-slate-900 dark:bg-indigo-900">
                      <HiUserGroup className="fill-indigo-800 dark:fill-slate-300" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                      Himpunan Mahasiswa Fisika
                    </h3>
                    <p className="text-sm font-normal text-slate-500 dark:text-slate-400 mb-2">
                      Universitas Hasanuddin
                    </p>
                    <p className="text-sm font-normal text-slate-400 dark:text-slate-500 mb-2">
                      Anggota Divisi Pendidikan
                    </p>
                    <time className="block mb-2 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
                      2018-2019
                    </time>
                  </li>
                  <li className="min-h-44 mb-10 mr-8 block max-w-sm p-6 bg-white border border-slate-200 rounded-lg shadow-xl hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 transition-all ease-in delay-0 duration-200 ">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -right-3 dark:ring-slate-900 dark:bg-indigo-900">
                      <HiUserGroup className="fill-indigo-800 dark:fill-slate-300" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                      Society of Petroleum Engineers (SPE)
                    </h3>
                    <p className="text-sm font-normal text-slate-500 dark:text-slate-400 mb-2">
                      Universitas Hasanuddin
                    </p>
                    <p className="text-sm font-normal text-slate-400 dark:text-slate-500 mb-2">
                      Ketua Divisi Training
                    </p>
                    <time className="block mb-2 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
                      2019 - 2020
                    </time>
                  </li>
                </ol>
              </div>
            </div>

            {/* <div className="col">
              <div className="w-60 relative">
                <p className="text-xl font-bold text-center uppercase my-1">
                  S1 Geofisika
                </p>
                <p className="text-sm text-center font-semibold text-slate-600 my-1">
                  Universitas Hasanuddin
                </p>
                <p className="text-md text-center text-slate-400 uppercase my-1">
                  2016 - 2021
                </p>
              </div>
              <div className="w-60 relative my-24">
                <p className="text-xl font-bold text-center uppercase my-1">
                  Fullstack Web Development
                </p>
                <p className="text-sm text-center font-semibold text-slate-600 my-1">
                  Bootcamp
                </p>
                <p className="text-xs text-center text-slate-500 uppercase my-1">
                  Dicoding
                </p>
                <p className="text-md text-center text-slate-400 uppercase my-1">
                  2016 - 2021
                </p>
              </div>
              <div className="w-60 relative">
                <p className="text-xl font-bold text-center uppercase my-1">
                  Fullstack Web Development
                </p>
                <p className="text-sm text-center font-semibold text-slate-600 my-1">
                  Bootcamp
                </p>
                <p className="text-xs text-center text-slate-500 uppercase my-1">
                  Dicoding
                </p>
                <p className="text-md text-center text-slate-400 uppercase my-1">
                  2016 - 2021
                </p>
              </div>
            </div> */}
            {/* timeline */}
            {/* <div className="col">
              <svg
                width={16}
                height={452}
                viewBox="0 0 16 452"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[15.06px] h-[451.06px]"
                preserveAspectRatio="none"
              >
                <line
                  x1="8.30914"
                  y1="8.00143"
                  x2="7.07025"
                  y2={444}
                  stroke="#A8DADC"
                  stroke-width="1.005"
                />
                <circle cx="8.03" cy="7.03" r="6.53" stroke="#D08484" />
                <circle cx="8.03" cy="7.03" r="4.03" fill="#E63946" />
                <circle cx="8.03" cy="223.03" r="6.53" stroke="#D08484" />
                <circle cx="8.03" cy="223.03" r="4.03" fill="#E63946" />
                <circle cx="7.03" cy="444.03" r="6.53" stroke="#D08484" />
                <circle cx="7.03" cy="444.03" r="4.03" fill="#E63946" />
              </svg>
            </div> */}
            {/* <div className="col">
              <div className="w-60 relative my-24">
                <p className="text-xl font-bold text-center uppercase my-1">
                  Fullstack Web Development
                </p>
                <p className="text-sm text-center font-semibold text-slate-600 my-1">
                  Bootcamp
                </p>
                <p className="text-xs text-center text-slate-500 uppercase my-1">
                  Dicoding
                </p>
                <p className="text-md text-center text-slate-400 uppercase my-1">
                  2016 - 2021
                </p>
              </div>
              <div className="w-60 relative my-24">
                <p className="text-xl font-bold text-center uppercase my-1">
                  Fullstack Web Development
                </p>
                <p className="text-sm text-center font-semibold text-slate-600 my-1">
                  Bootcamp
                </p>
                <p className="text-xs text-center text-slate-500 uppercase my-1">
                  Dicoding
                </p>
                <p className="text-md text-center text-slate-400 uppercase my-1">
                  2016 - 2021
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationSection;
