import Admin_Menu from "../components/admin_menu";

export default function Admin_report() {
  return (
    <>
      <div className="bg-mediumPurple w-full h-screen font-iranyekan">
        <Admin_Menu />
        <div className="pt-20">
          <div className="sm:pr-10 pr-0">
            <h1 className="text-white font-bold w-full text-4xl mb-5">
              گزارشات
            </h1>
            <div className="bg-backPurple border-2 border-purple-500 p-5 rounded-3xl sm:mx-8 mx-0 flex justify-center items-center flex-col gap-5">
              <div className="bg-mediumPurple md:p-3 p-2 w-full rounded-xl text-white font-medium h-[12.7rem] overflow-auto">
                <div className="flex justify-between items-center w-full">
                  <h1 className="font-bold text-3xl">لیست سفر ها</h1>
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
                    <th className="w-28">نام راننده</th>
                    <th className="w-32">آدرس مبدا</th>
                    <th className="w-32">آدرس مقصد</th>
                    <th className="w-28">تاریخ</th>
                    <th className="w-28">عملیات</th>
                  </tr>
                  <tr className="flex text-center mb-1 sm:gap-4 gap-1">
                    <td className="w-28">پژمان کاظمی میر</td>
                    <td className="w-32">12س34572</td>
                    <td className="w-32">آبی آسمانی</td>
                    <td className="w-28">سواری</td>
                    <td className="w-28">
                      <button className="bg-red-600 p-1 rounded-md hover:scale-110 duration-200">
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
                  <tr className="flex text-center mb-1 sm:gap-4 gap-1">
                    <td className="w-28">پژمان کاظمی میر</td>
                    <td className="w-32">12س34572</td>
                    <td className="w-32">سبز یشمی</td>
                    <td className="w-28">سواری</td>
                    <td className="w-28">
                      <button className="bg-red-600 p-1 rounded-md hover:scale-110 duration-200">
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
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
