export default function Contact_us() {
  return (
    <>
      <div className="bg-backPurple h-screen flex justify-center items-center font-iranyekan">
        <div className="bg-lightPurple lg:h-[65%] h-full lg:w-[35%] w-full md:rounded-2xl flex flex-col justify-center items-center text-white">
          <p className="my-4 font-bold text-base sm:text-[35px] md:text-[35px] lg:text-[40px]">تماس با ما</p>
          <div className="my-3 w-full flex flex-col px-10 text-center">
            <label className="mb-2 font-medium text-base sm:text-lg md:text-xl lg:text-2xl">
              شماره تماس
            </label>
            <p className="font-semibold text-base sm:text-lg md:text-[25px] lg:text-[30px]">09123456789</p>
            
          </div>
          <div className="mt-[20px] w-full flex flex-col px-10 text-center">
            <label className="mb-2 font-medium text-base sm:text-lg md:text-xl lg:text-2xl">
              آدرس ایمیل
            </label>
            <p className="font-semibold text-base sm:text-lg md:text-[20px] lg:text-[23px]">example.mail@company.com</p> 
          </div>
          <div className="flex justify-center items-center mt-8 gap-4">
            <a
              className="bg-[#8B7AB8] px-12 py-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-xl hover:scale-110 hover:shadow-lg transition-all duration-300"
              href="/landing"
            >
              بازگشت
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
