import React, { useState } from "react";

export default function Admin_Menu() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-backPurple font-iranyekan">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <button
              id="menu"
              onClick={toggleSidebar}
              className="p-1 flex sm:hidden rounded-lg text-white hover:bg-mediumPurple"
            >
              <svg
                className="w-7 h-7 transition duration-75 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>
            <div className="hidden sm:flex justify-center items-center gap-6">
              <a href="/admin_panel">
                <h1 className="font-bold text-white sm:text-xl text-3xl cursor-pointer hover:scale-[120%] transition-all duration-300">
                  LOGO
                </h1>
              </a>
              <a href="/admin_panel">
                <h1 className="text-white text-md font-medium cursor-pointer hover:scale-[120%] transition-all duration-300">
                  خانه
                </h1>
              </a>
              <a href="/admin_car">
                <h1 className="text-white text-md font-medium cursor-pointer hover:scale-[120%] transition-all duration-300">
                  خودرو - راننده
                </h1>
              </a>
              <a href="/admin_travel">
                <h1 className="text-white text-md font-medium cursor-pointer hover:scale-[120%] transition-all duration-300">
                  سفر ها
                </h1>
              </a>
              <a href="/admin_report">
                <h1 className="text-white text-md font-medium cursor-pointer hover:scale-[120%] transition-all duration-300">
                  گزارشات
                </h1>
              </a>
            </div>
            <a href="/">
              <img className="w-10 rounded-full" src="profile.jpg" alt="" />
            </a>
          </div>
        </div>
      </nav>

      {isSidebarVisible && (
        <div
          id="sidebar"
          className="fixed top-0 right-0 z-40 w-64 h-screen pt-20 transition-transform translate-x-0 bg-backPurple sm:translate-x-full font-iranyekan"
        >
          <div className="h-full px-3 pb-4 bg-backPurple">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="/admin_panel"
                  className="flex items-center p-2 rounded-lg text-gray-300 hover:text-white dark:hover:bg-mediumPurple group"
                >
                  <svg
                    className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                  </svg>
                  <span className="ms-3">خانه</span>
                </a>
              </li>
              <li>
                <a
                  href="/admin_car"
                  className="flex items-center p-2 rounded-lg text-gray-300 hover:text-white dark:hover:bg-mediumPurple group"
                >
                  <svg
                    className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                  </svg>
                  <span className="ms-3">خودرو - راننده</span>
                </a>
              </li>
              <li>
                <a
                  href="/admin_travel"
                  className="flex items-center p-2 rounded-lg text-gray-300 hover:text-white dark:hover:bg-mediumPurple group"
                >
                  <svg
                    className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5h.5A1.5 1.5 0 0 1 8 6.5V7H7v-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H4v1H2.5v.25a.75.75 0 0 1-1.5 0v-.335A1.5 1.5 0 0 1 0 13.5v-7A1.5 1.5 0 0 1 1.5 5H2zM3 5h2V2H3z" />
                    <path d="M2.5 7a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5m10 1v-.5A1.5 1.5 0 0 0 11 6h-1a1.5 1.5 0 0 0-1.5 1.5V8H8v8h5V8zM10 7h1a.5.5 0 0 1 .5.5V8h-2v-.5A.5.5 0 0 1 10 7M5 9.5A1.5 1.5 0 0 1 6.5 8H7v8h-.5A1.5 1.5 0 0 1 5 14.5zm9 6.5V8h.5A1.5 1.5 0 0 1 16 9.5v5a1.5 1.5 0 0 1-1.5 1.5z" />
                  </svg>
                  <span className="ms-3">سفر ها</span>
                </a>
              </li>
              <li>
                <a
                  href="/admin_report"
                  className="flex items-center p-2 rounded-lg text-gray-300 hover:text-white dark:hover:bg-mediumPurple group"
                >
                  <svg
                    className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                    <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118z" />
                  </svg>
                  <span className="ms-3">گزارشات</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
