import { useState } from "react";
// import "./app.css";
import Top_menu from "./component/top_menu";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Top_menu />
      <div>
        <img src="" alt="" />
        <div>
          <h1>سامانه حمل و نقل</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
