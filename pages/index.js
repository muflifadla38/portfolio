import FullPageScroll from "@/components/FullPageScroll";

const Home = () => {
  return (
    <>
      <FullPageScroll className="bg-slate-200 text-slate-800">
        <div
          id="profile"
          className="section flex items-center justify-center bg-slate-200"
        >
          <p class="text-center text-2xl font-bold">Satu</p>
        </div>
        <div
          id="education"
          className="section flex items-center justify-center"
        >
          <p class="text-center text-2xl font-bold">Dua</p>
        </div>
        <div id="skills" className="section flex items-center justify-center">
          <p class="text-center text-2xl font-bold">Tiga</p>
        </div>
      </FullPageScroll>
    </>
  );
};

export default Home;
