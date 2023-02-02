import FullPageScroll from "@/components/FullPageScroll";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <FullPageScroll className="bg-slate-100 text-slate-800">
        <div id="introduction" className="scroll-item">
          <p className="text-center text-2xl font-bold">Intro</p>
        </div>
        <div id="profile" className="scroll-item">
          <p className="text-center text-2xl font-bold">Profile</p>
        </div>
        <div id="education" className="scroll-item">
          <p className="text-center text-2xl font-bold">Education</p>
        </div>
        <div id="skills" className="scroll-item">
          <p className="text-center text-2xl font-bold">Skills</p>
        </div>
        <div
          id="contact"
          className="scroll-item text-slate-600 dark:text-slate-400 body-font relative"
        >
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0 grayscale-[.4] dark:grayscale contract-[1.2] dark:contrast-[.83] dark:invert-[.92] opacity-50 dark:opacity-100"
                frameBorder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                loading="lazy"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Geophysics%20Departemen%20of%20Hasanuddin%20University&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              />
              <div className="bg-slate-100 dark:bg-slate-800 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 dark:text-slate-500 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Jl. Perintis Kemerdekaan KM. 10, Kel. Tamalanrea Indah, Kec.
                    Tamalanrea, Kota Makassar, Sulawesi Selatan 90245
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 dark:text-slate-500 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <Link href="mailto:muflyfadlasyihab@gmail.com">
                    <a className="text-indigo-500 dark:text-indigo-400 leading-relaxed">
                      muflyfadlasyihab@gmail.com
                    </a>
                  </Link>
                  <h2 className="title-font font-semibold text-gray-900 dark:text-slate-500 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <Link href="tel:+6289669644474">
                    <a className="leading-relaxed">0896-6964-4474</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0  text-slate-400 ">
              <h2 className="text-slate-900 dark:text-slate-200 text-lg mb-1 font-semibold title-font">
                Get in Touch With Us
              </h2>
              <p className="leading-relaxed mb-5">
                Need help with our service plans? Here&apos;s how you can reach
                us
              </p>
              <div className="text-slate-600 dark:text-slate-400">
                <Input label="Name" peer="Please enter your name" />
                <Input
                  label="Email"
                  type="email"
                  peer="Please enter your email"
                />
                <Input
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
              <p className="text-xs text-gray-500 mt-3">
                Entah apa disini, bisa jga dihilangkan klo nda perlu
              </p>
            </div>
          </div>
        </div>
      </FullPageScroll>
    </>
  );
};

export default Home;
