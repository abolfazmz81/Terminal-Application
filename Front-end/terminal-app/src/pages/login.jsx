export default function Login() {
    return (
      <>
        <div className="bg-backPurple h-screen flex justify-center items-center">
          <div className="bg-lightPurple md:h-[65%] h-full md:w-[35%] w-full md:rounded-2xl flex flex-col items-center text-white">
            <p className="my-4 font-bold text-[40px]">Logo</p>
            <div className="my-3 w-full flex flex-col px-10 justify-center">
              <p className="mb-2 font-bold text-[25px]">شماره تماس</p>
              <input
                className="bg-lightPurple rounded-[15px] border-2 placeholder:text-backPurple text-white border-backPurple p-3"
                dir="ltr"
                placeholder="+989123456789"
                type="text"
              />
            </div>
            <div className=" w-full flex flex-col px-10 justify-center">
              <p className="mb-2 font-bold text-[25px]">رمز عبور</p>
              <input
                className="bg-lightPurple rounded-[15px] border-2 placeholder:text-backPurple text-white border-backPurple p-3"
                dir="ltr"
                type="text"
                placeholder="*********"
              />
            </div>
            <a
              className="bg-[#8B7AB8] mt-5 px-10 py-1 text-2xl font-black rounded-xl hover:scale-110 hover:shadow-lg transition-all duration-300"
              href="/driver"
            >
              ورود
            </a>
          </div>
        </div>
      </>
    );
  }
  