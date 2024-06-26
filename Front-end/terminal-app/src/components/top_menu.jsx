import "../app.css";

export default function Top_menu() {
  return (
    <div className="flex justify-between items-center px-5 w-full bg-backPurple text-white h-[2rem] shadow-md">
      <div className="flex justify-start w-full gap-4 items-center">
        <a href="">
          <h1 className="font-bold text-xl">LOGO</h1>
        </a>
        <a className="sm:flex hidden" href="">
          <h3>خانه</h3>
        </a>
        <a className="sm:flex hidden" href="">
          <h3>تماس با ما</h3>
        </a>
      </div>
      <a href="">
        <h1>ورود</h1>
      </a>
    </div>
  );
}
