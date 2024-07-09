import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Driver() {
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    async function loadTrip() {
      const response = await fetch("http", {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }).then((res) => res.json().then((data) => setTrip(data)));
    }
    loadTrip();
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-backPurple flex lg:flex-row flex-col justify-center items-center gap-7 font-iranyekan">
        <div className="lg:flex hidden bg-lightPurple h-[95%] w-[20%] rounded-xl justify-between flex-col items-center py-7">
          <div className="flex justify-center items-center flex-col gap-2 text-white">
            <img
              className="rounded-full w-64 p-4 mb-4 hover:shadow-lg transition-all duration-300 hover:scale-[101%]"
              src="profile.jpg"
              alt=""
            />
            <h1 className="text-3xl text-center font-bold">جاسم جاساز</h1>
            <h1 className="text-xl text-center font-semibold">123456789</h1>
          </div>
          <a
            className="text-white bg-mediumPurple px-10 py-1 text-2xl font-semibold rounded-xl hover:scale-110 hover:shadow-lg transition-all duration-300"
            href="/"
          >
            خروج
          </a>
        </div>
        <div className="lg:hidden flex justify-between py-3 px-6 rounded-2xl items-center bg-lightPurple w-[95%]">
          <div className="flex justify-center items-center gap-3">
            <img
              className="w-24 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-[101%]"
              src="profile.jpg"
              alt=""
            />
            <div className="text-white">
              <h1 className="text-3xl font-bold">جاسم جاساز</h1>
              <h1 className="text-xl text-start mt-2 font-semibold">
                123456789
              </h1>
            </div>
          </div>
          <a
            className="text-white bg-mediumPurple px-10 py-1 text-2xl font-black rounded-xl hover:scale-110 hover:shadow-lg transition-all duration-300 "
            href="/"
          >
            خروج
          </a>
        </div>
        <div className="bg-lightPurple lg:w-[60%] w-[95%] lg:h-[95%] h-[80%] rounded-xl text-white">
          <h1 className="text-4xl text-center font-bold mt-5">سفر ها</h1>
          {trip.map((trip) => (
            <div className="m-8 bg-[#62309c] p-5 rounded-2xl hover:scale-[101%] hover:shadow-xl ring-offset-lightPurple ring-0 hover:ring-offset-4 hover:ring-purple-300  hover:ring-[0.18rem] transition-all duration-300">
              <h1>
                تاریخ: <span>{trip.Date}</span>
              </h1>
              <h1>
                مبدا: <span>{trip.Origin}</span>
              </h1>
              <h1>
                مقصد: <span>{trip.Destination}</span>
              </h1>
              <div className="flex justify-end">
                <a
                  className="text-white bg-mediumPurple mx-2 px-10 py-1 text-2xl font-medium rounded-xl hover:scale-110 hover:shadow-lg ring-offset-[#62309c] ring-0 hover:ring-offset-4 hover:ring-purple-300  hover:ring-[0.18rem] transition-all duration-300"
                  href=""
                >
                  انجام شد
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
