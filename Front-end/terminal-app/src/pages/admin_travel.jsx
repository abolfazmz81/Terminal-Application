import Admin_Menu from "../components/admin_menu";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Admin_travel() {
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

  async function deleteTrip(id) {
    console.log(id);
    const response = await fetch(`http://127.0.0.1:8000/Delete_Trip/${id}`, {
      method: "Delete",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });
  }

  return (
    <>
      <div className="bg-mediumPurple w-full h-screen font-iranyekan">
        <Admin_Menu />
        <div className="pt-20">
          <div className="sm:pr-10 pr-0">
            <h1 className="text-white font-bold w-full text-4xl mb-5">
              مدیریت سفر ها
            </h1>
            <div className="bg-backPurple border-2 border-purple-500 p-5 rounded-3xl sm:mx-8 mx-0 flex justify-center items-center flex-col gap-5">
              <div className="bg-mediumPurple md:p-3 p-2 w-full rounded-xl text-white font-medium h-[30rem] overflow-auto">
                <div className="flex justify-between items-center w-full">
                  <h1 className="font-bold text-3xl">لیست سفر ها</h1>
                  <a
                    href="/add_travel"
                    className="bg-purple-500 p-2 rounded-2xl hover:scale-110 duration-200"
                  >
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                  </a>
                </div>
                <table className="flex mt-3 justify-center items-center flex-col w-full overflow-auto">
                  <tr className="flex font-bold sm:text-xl text-lg mb-5 text-center sm:gap-4 gap-1">
                    <th className="w-28">قیمت</th>
                    <th className="w-32">آدرس مبدا</th>
                    <th className="w-32">آدرس مقصد</th>
                    <th className="w-28">تاریخ</th>
                    <th className="w-28">عملیات</th>
                  </tr>
                  {trip.map((trip) => (
                  <tr className="flex text-center mb-1 sm:gap-4 gap-1">
                    <td className="w-28">{trip.Price}</td>
                    <td className="w-32">{trip.Origin}</td>
                    <td className="w-32">{trip.Destination}</td>
                    <td className="w-28">{trip.Date}</td>
                    <td className="w-28">
                      <button onClick={() => deleteTrip(trip.id)}
                       className="bg-red-600 p-1 rounded-md hover:scale-110 duration-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </button>
                    </td>
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
