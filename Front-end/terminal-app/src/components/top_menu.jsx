import "../app.css";

export default function Top_menu() {
  return (
    <div className="flex justify-between items-center px-5 py-2 w-full bg-backPurple text-white h-[2rem] shadow-md font-iranyekan">
      <div className="flex sm:justify-start justify-center w-full gap-4 items-center">
        <a href="/">
          <h1 className="font-bold sm:text-xl text-3xl cursor-pointer hover:scale-[120%] transition-all duration-300">
            LOGO
          </h1>
        </a>
        <a href="/">
          <h3 className="sm:flex hidden cursor-pointer hover:scale-[120%] transition-all duration-300">
            خانه
          </h3>
        </a>
        <a href="">
          <h3 className="sm:flex hidden cursor-pointer hover:scale-[120%] transition-all duration-300">
            تماس با ما
          </h3>
        </a>
      </div>
      <a href="/login">
        <h1 className="sm:flex hidden font-semibold bg-mediumPurple hover:scale-125 hover:shadow-lg transition-all duration-300 px-6 py-1 rounded-xl cursor-pointer">
          ورود
        </h1>
      </a>
    </div>
  );
}
