import Admin_Menu from "../components/admin_menu";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Admin_panel() {
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    async function loadTrip() {
      const value = localStorage.getItem("information");
      const parsedData = JSON.parse(value);
      console.log(parsedData.id);
      const response = await fetch(`http://127.0.0.1:8000/OTrips/${parsedData.id}`, {
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
      <div className="bg-mediumPurple w-full h-screen">
        <Admin_Menu />
        <div className="pt-20 font-iranyekan">
          <div className="pr-10">
            <h1 className="text-white font-bold text-4xl mb-5">سفر های فعال</h1>
          </div>
          <div className="bg-backPurple border-2 border-purple-500 p-5 rounded-3xl mx-8 flex justify-start items-center h-[30rem] overflow-auto flex-col gap-5">
          {trip.map((trip) => (
            <div className="bg-mediumPurple p-3 w-full rounded-xl text-white font-medium hover:scale-[101%] duration-200 hover:shadow-lg">
              <h3>
                تاریخ: <span>{trip.Date}</span>
              </h3>
              <h3>
                مبدا: <span>{trip.Origin}</span>
              </h3>
              <h3>
                مقصد: <span>{trip.Destination}</span>
              </h3>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
