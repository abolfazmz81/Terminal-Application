import { useState } from "react";
// import "./app.css";
import Top_menu from "./component/top_menu";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-backPurple h-screen">
        <Top_menu />
        <div className="flex justify-center items-center flex-col sm:flex-row-reverse gap-5 text-white bg-backPurple p-3">
          <img
            className="sm:w-[30%] w-[70%] object-cover object-center sm:h-[300px] h-[150px] rounded-lg"
            src="bus.jpg"
            alt=""
          />
          <div className="sm:w-[40%] w-[90%]">
            <h1 className="sm:text-3xl text-2xl font-bold text-center pb-4">
              سامانه حمل و نقل
            </h1>
            <div className="flex text-sm sm:text-base flex-col items-center gap-4 justify-center">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <a
                className="bg-mediumPurple px-10 py-1 text-2xl font-black rounded-xl"
                href=""
              >
                شروع کنید
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
