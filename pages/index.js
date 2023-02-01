import FullPageScroll from "@/components/FullPageScroll";

const Home = () => {
  return (
    <>
      <FullPageScroll className="bg-slate-100 text-slate-800">
        <div id="introduction" className="scroll-item">
          <p class="text-center text-2xl font-bold">Intro</p>
        </div>
        <div id="profile" className="scroll-item">
          <p class="text-center text-2xl font-bold">Profile</p>
        </div>
        <div id="education" className="scroll-item">
          <p class="text-center text-2xl font-bold">Education</p>
        </div>
        <div id="skills" className="scroll-item">
          <p class="text-center text-2xl font-bold">Skills</p>
        </div>
      </FullPageScroll>
    </>
  );
};

export default Home;
