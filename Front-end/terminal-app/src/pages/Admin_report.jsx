import Admin_Menu from "../components/admin_menu";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


export default function Admin_report() {
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    async function loadTrip() {
      const value = localStorage.getItem("information");
      const parsedData = JSON.parse(value);
      console.log(parsedData.id);
      const response = await fetch(`http://127.0.0.1:8000/O_Daily_Trips/${parsedData.id}`, {
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
      <div className="bg-mediumPurple w-full h-screen font-iranyekan">
        <Admin_Menu />
        <div className="pt-20">
          <div className="sm:pr-10 pr-0">
            <h1 className="text-white font-bold w-full text-4xl mb-5">
              گزارشات <span className="text-white font-light text-2xl">(سفرهای امروز)</span>
            </h1>
            <div className="bg-backPurple border-2 border-purple-500 p-5 rounded-3xl sm:mx-8 mx-0 flex justify-center items-center flex-col gap-5">
              <div className="bg-mediumPurple md:p-3 p-2 w-full rounded-xl text-white font-medium h-[12.7rem] overflow-auto">
              <table className="flex mt-3 justify-center items-center flex-col w-full overflow-auto">
                  <tr className="flex font-bold sm:text-xl text-lg mb-5 text-center sm:gap-4 gap-1">
                    <th className="w-28">قیمت</th>
                    <th className="w-32">آدرس مبدا</th>
                    <th className="w-32">آدرس مقصد</th>
                    <th className="w-28">تاریخ</th>
                  </tr>
                  {trip.map((trip) => (
                  <tr className="flex text-center mb-1 sm:gap-4 gap-1">
                    <td className="w-28">{trip.Price}</td>
                    <td className="w-32">{trip.Origin}</td>
                    <td className="w-32">{trip.Destination}</td>
                    <td className="w-28">{trip.Date}</td>
                  </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
