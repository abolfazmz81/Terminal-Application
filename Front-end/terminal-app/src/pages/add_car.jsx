import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Add_car() {
  const navigate = useNavigate();

  function addCar(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setCar(data);
    navigate("/admin_car");
  }

  useEffect(() => {
    async function setCar(data) {
      await axios.post("http", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-backPurple flex justify-center items-center font-iranyekan">
        <div className="sm:w-3/4 sm:h-1/2 xl:h-2/3 w-full h-full  bg-mediumPurple sm:border-2 border-0 border-purple-500 sm:rounded-3xl rounded-none">
          <form
            onSubmit={addCar}
            className="flex justify-center items-center flex-col w-full h-full text-white"
          >
            <h1 className="sm:text-5xl text-3xl font-bold mb-10">
              فرم افزودن خودرو
            </h1>
            <div className="flex justify-center items-center sm:flex-row flex-col w-full sm:gap-20 gap-3">
              <div className="sm:w-1/2 md:w-1/3 w-full md:px-0 px-3">
                <label htmlFor="name">
                  <h1 className="mr-2 font-medium text-xl">نام خودرو:</h1>
                </label>
                <input
                  type="text"
                  id="name"
                  name="model"
                  placeholder="پژو پارس"
                  className="bg-lightPurple mt-2 w-full rounded-xl h-10 border-2 placeholder:text-backPurple text-white border-backPurple px-2 py-1"
                />
              </div>
              <div className="sm:w-1/2 md:w-1/3 w-full md:px-0 px-3">
                <label htmlFor="palete">
                  <h1 className="mr-2 font-medium text-xl">شماره پلاک:</h1>
                </label>
                <input
                  type="text"
                  id="palete"
                  name="plate"
                  placeholder="12س345"
                  className="bg-lightPurple mt-2 w-full rounded-xl h-10 border-2 placeholder:text-backPurple text-white border-backPurple px-2 py-1"
                />
              </div>
            </div>
            <div className="flex justify-center items-center sm:flex-row flex-col w-full sm:gap-20 gap-3 mt-4">
              <div className="sm:w-1/2 md:w-1/3 w-full md:px-0 px-3">
                <label htmlFor="color">
                  <h1 className="mr-2 font-medium text-xl">رنگ خودرو:</h1>
                </label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  placeholder="مشکی نوک مدادی"
                  className="bg-lightPurple mt-2 rounded-xl w-full h-10 border-2 placeholder:text-backPurple text-white border-backPurple px-2 py-1"
                />
              </div>
              <div className="sm:w-1/2 md:w-1/3 w-full md:px-0 px-3">
                <label htmlFor="type">
                  <h1 className="mr-2 font-medium text-xl">نوع خودرو:</h1>
                </label>
                <input
                  type="text"
                  id="type"
                  placeholder="سواری"
                  name="type"
                  className="bg-lightPurple mt-2 rounded-xl w-full h-10 border-2 placeholder:text-backPurple text-white border-backPurple px-2 py-1"
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-5 mt-8">
              <button type="submit">
                <h1 className="bg-purple-500 px-10 py-2 text-2xl font-black rounded-xl hover:scale-110 hover:shadow-lg transition-all duration-300">
                  افزودن خودرو
                </h1>
              </button>
              <a href="/admin_car">
                <h1 className="bg-red-500 p-2 rounded-2xl hover:scale-110 hover:shadow-lg transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                    />
                  </svg>
                </h1>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
