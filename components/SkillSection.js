import {
  BootstrapIcon,
  Css3Icon,
  Html5Icon,
  HerokuIcon,
  JavascriptIcon,
  JqueryIcon,
  MongodbIcon,
  ReactIcon,
  ReduxIcon,
  RestAPIIcon,
  TailwindIcon,
  NextJsIcon,
  NodeJsIcon,
  ExpressJsIcon,
  PhpIcon,
  LaravelIcon,
  WordpressIcon,
  PythonIcon,
  MysqlIcon,
  FirebaseIcon,
  FigmaIcon,
  AdobeXdIcon,
  PhotoshopIcon,
  AdobeIndesignIcon,
  NetworkIcon,
} from "./Icons";

const SkillSection = ({ slideMode = true }) => {
  return (
    <div id="skills" className={slideMode ? "scroll-section" : "section"}>
      <div className={(slideMode ? "scroll-item" : "section-item") + " flex-col"}>
        <div className="text-center max-w-xl mb-8">
          <p className="font-bold text-3xl mb-4">Skill & Tools</p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <Html5Icon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              HTML5
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <Css3Icon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              CSS 3
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <TailwindIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Tailwind
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <BootstrapIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Bootstrap
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <JavascriptIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Javascript
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <JqueryIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              JQuery
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <ReactIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              ReactJS
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <ReduxIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Redux
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <NextJsIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              NextJS
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <NodeJsIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              NodeJS
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <ExpressJsIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              ExpressJS
            </p>
          </div>
          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <PhpIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              PHP
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <LaravelIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Laravel
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <WordpressIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Wordpress
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <PythonIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Python
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <MysqlIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              MySQL
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <MongodbIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              MongoDB
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <FirebaseIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Firebase
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <HerokuIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Heroku
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <RestAPIIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              REST API
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <FigmaIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Figma
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <AdobeXdIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Adobe XD
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <AdobeIndesignIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              InDesign
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <PhotoshopIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Photoshop
            </p>
          </div>

          <div className="w-24 p-3 bg-white border border-slate-50 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <NetworkIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Network
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
