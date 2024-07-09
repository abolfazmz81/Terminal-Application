import Admin_Menu from "../components/admin_menu";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Admin_car() {
  const [car, setCar] = useState([]);
  const [driver, setDriver] = useState([]);

  useEffect(() => {
    async function loadCar() {
      const value = localStorage.getItem("information");
      const parsedData = JSON.parse(value);
      console.log(parsedData.id);
      const response = await fetch(`http://127.0.0.1:8000/OCars/${parsedData.id}`, {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }).then((res) => res.json().then((data) => setCar(data)));
    }
    loadCar();

    async function loadDriver() {
      const value = localStorage.getItem("information");
      const parsedData = JSON.parse(value);
      console.log(parsedData.id);
      const response = await fetch(`http://127.0.0.1:8000/ODrivers/${parsedData.id}`, {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }).then((res) => res.json().then((data) => setDriver(data)));
    }
    loadDriver();
  }, []);

  async function deleteCar(id) {
    console.log(id);
    const response = await fetch(`http://127.0.0.1:8000/Delete_Car/${id}`, {
      method: "Delete",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });
  }
  async function deleteDriver(id) {
    console.log(id);
    const response = await fetch(`http://127.0.0.1:8000/Delete_Driver/${id}`, {
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
            <h1 className="text-white font-bold w-full text-4xl mb-3">
              مدیریت خودرو
            </h1>
            <div className="bg-backPurple border-2 border-purple-500 sm:p-5 p-4 rounded-3xl sm:mx-8 mx-0 flex justify-center items-center flex-col gap-5">
              <div className="bg-mediumPurple md:p-3 p-2 w-full rounded-xl text-white font-medium h-[12.7rem] overflow-auto">
                <div className="flex justify-between items-center w-full">
                  <h1 className="font-bold text-3xl">لیست خودرو ها</h1>
                  <a
                    href="/add_car"
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
                    <th className="w-28">نام خودرو</th>
                    <th className="w-28">شماره پلاک</th>
                    <th className="w-28">رنگ خودرو</th>
                    <th className="w-28">نوع خودرو</th>
                    <th className="w-28">عملیات</th>
                  </tr>
                  {car.map((car) => (
                  <tr className="flex text-center mb-1 sm:gap-4 gap-1">
                    <td className="w-28">{car.model}</td>
                    <td className="w-28">{car.plate}</td>
                    <td className="w-28">{car.color}</td>
                    <td className="w-28">{car.type}</td>
                    <td className="w-28">
                      <button onClick={() => deleteCar(car.id)}
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
        <div className="pt-4">
          <div className="sm:pr-10 pr-0">
            <h1 className="text-white w-full font-bold text-4xl mb-3">
              مدیریت راننده
            </h1>
            <div className="bg-backPurple border-2 border-purple-500 sm:p-5 p-4 rounded-3xl sm:mx-8 mx-0 flex justify-center items-center flex-col gap-5">
              <div className="bg-mediumPurple md:p-3 p-2 w-full rounded-xl text-white font-medium h-[12.7rem] overflow-auto">
                <div className="flex justify-between items-center w-full">
                  <h1 className="font-bold text-3xl">لیست  راننده ها</h1>
                  <a
                    href="/add_driver"
                    className="bg-purple-500 p-2 rounded-2xl hover:scale-110 duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                      <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                    </svg>
                  </a>
                </div>
                <table className="flex mt-3 justify-center items-center flex-col w-full overflow-auto">
                  <tr className="flex font-bold sm:text-xl text-lg mb-5 text-center sm:gap-4 gap-1">
                    <th className="w-44">نام و نام خوانوادکی</th>
                    <th className="w-28">کد ملی</th>
                    <th className="w-28">شماره تلفن</th>
                    <th className="w-28">عملیات</th>
                  </tr>
                  {driver.map((driver) => (
                  <tr className="flex text-center mb-1 sm:gap-4 gap-1">
                    <td className="w-44">{driver.Dname}</td>
                    <td className="w-28">{driver.nationalId}</td>
                    <td className="w-28">{driver.number}</td>
                    <td className="w-28">
                      <button onClick={() => deleteDriver(driver.id)}
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
