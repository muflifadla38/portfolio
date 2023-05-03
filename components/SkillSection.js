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

const SkillSection = ({ slideMode = true, color }) => {
  return (
    <div id="skills" className={slideMode ? "scroll-section" : "section"}>
      <div
        className={(slideMode ? "scroll-item" : "section-item") + " flex-col"}
      >
        <div className="text-center max-w-xl mb-8">
          <p className="font-bold text-3xl mb-4">Skill & Tools</p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full">
                <Html5Icon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">HTML5</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <Css3Icon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">CSS 3</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <TailwindIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Tailwind</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <BootstrapIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Bootstrap</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <JavascriptIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Javascript</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <JqueryIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">JQuery</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <ReactIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">ReactJS</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <ReduxIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Redux</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <NextJsIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">NextJS</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <NodeJsIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">NodeJS</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <ExpressJsIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">ExpressJS</p>
          </div>
          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <PhpIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">PHP</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <LaravelIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Laravel</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <WordpressIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Wordpress</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <PythonIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Python</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <MysqlIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">MySQL</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <MongodbIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">MongoDB</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <FirebaseIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Firebase</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <HerokuIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Heroku</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <RestAPIIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">REST API</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <FigmaIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Figma</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <AdobeXdIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Adobe XD</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <AdobeIndesignIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">InDesign</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <PhotoshopIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Photoshop</p>
          </div>

          <div
            className={`w-24 p-3 ${color.white} border rounded-lg shadow-md dark:${color.darkBase} dark:hover:${color.primaryHover} dark:border-transparent text-center hover:shadow-2xl transition-all ease-in delay-0 duration-300`}
          >
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500">
                <NetworkIcon />
              </div>
            </div>
            <p className="text-sm font-semibold tracking-tight">Network</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
