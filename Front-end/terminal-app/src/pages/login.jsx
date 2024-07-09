import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { json, Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();


  async function login(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const loginUrl = 'http://127.0.0.1:8000/Login';
    try {
        const response = await axios.post(loginUrl, data);
        console.log('Login successful:', response.data);
        localStorage.setItem("information", JSON.stringify(response.data));
        if(response.status==200){
          navigate("/driver");
        }
        else if(response.status==201){
          navigate("/admin_panel");
        }
        // Handle the response, e.g., store the token or navigate to another page
    } catch (error) {
        console.error('Error during login:', error.response ? error.response.data : error.message);
        alert(error.response.data);
    }
    

}

  return (
    <>
      <div className="bg-backPurple h-screen flex justify-center items-center font-iranyekan">
        <form onSubmit={login} className="bg-lightPurple lg:h-[65%] h-full lg:w-[35%] w-full md:rounded-2xl flex flex-col justify-center items-center text-white">
          <p className="my-4 font-bold text-[40px]">Logo</p>
          <div className="my-3 w-full flex flex-col px-10 justify-center">
            <label htmlFor="number" className="mb-2 font-medium text-[25px]">
              شماره تماس
            </label>
            <input
              className="bg-lightPurple rounded-[15px] border-2 placeholder:text-backPurple text-white border-backPurple p-3"
              dir="ltr"
              id="number"
              name="phoneNumber"
              placeholder="+989123456789"
              type="text"
            />
          </div>
          <div className=" w-full flex flex-col px-10 justify-center">
            <label htmlFor="pass" className="mb-2 font-medium text-[25px]">
              رمز عبور
            </label>
            <input
              className="bg-lightPurple rounded-[15px] border-2 placeholder:text-backPurple text-white border-backPurple p-3"
              dir="ltr"
              type="text"
              id="pass"
              name="password"
              placeholder="*********"
            />
          </div>
          <div className="flex justify-center items-center mt-8 gap-4">
            <button type="submit"
              className="bg-[#8B7AB8] px-12 py-2 text-2xl font-black rounded-xl hover:scale-110 hover:shadow-lg transition-all duration-300"
              href="/driver"
            >
              ورود
            </button>
            <a href="/">
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
    </>
  );
}
