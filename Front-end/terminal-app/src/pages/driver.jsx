export default function Driver() {
  return (
    <>
      <div className="w-full h-screen bg-backPurple flex justify-center items-center gap-7">
        <div className="lg:flex hidden bg-lightPurple h-[95%] w-[20%] rounded-xl justify-between flex-col items-center py-7">
          <div className="flex justify-center items-center flex-col gap-2 text-white">
            <img className="rounded-full w-64 mb-4" src="profile.jpg" alt="" />
            <h1 className="text-3xl text-center font-bold">NAMEEEEEE</h1>
            <h1 className="text-xl text-center font-semibold">123456789</h1>
          </div>
          <a
            className="text-white bg-mediumPurple px-10 py-1 text-2xl font-black rounded-xl"
            href=""
          >
            خروج
          </a>
        </div>
        <div className="bg-lightPurple w-[60%] h-[95%] rounded-xl text-white">
          <h1 className="text-4xl text-center font-bold mt-3">سفر ها</h1>
          <div className="m-5 bg-purple-700 p-5 rounded-2xl">
            <h1>
              تاریخ: <span>تاریخ در این جا قرار میگیرید</span>
            </h1>
            <h1>
              مبدا: <span>آدرس در این جا قرار میگیرید</span>
            </h1>
            <h1>
              مقصد: <span>آدرس در این جا قرار میگیرید</span>
            </h1>
            <div className="flex justify-end">
              <a
                className="text-white bg-mediumPurple px-10 py-1 text-2xl font-black rounded-xl"
                href=""
              >
                انجام شد
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
