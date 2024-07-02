import Admin_Menu from "../components/admin_menu";

export default function Admin_panel() {
  return (
    <>
      <div className="bg-mediumPurple w-full h-screen">
        <Admin_Menu />
        <div className="pt-20 font-iranyekan">
          <div className="pr-10">
            <h1 className="text-white font-bold text-4xl mb-5">سفر های فعال</h1>
          </div>
          <div className="bg-backPurple border-2 border-purple-500 p-5 rounded-3xl mx-8 flex justify-center items-center flex-col gap-5">
            <div className="bg-mediumPurple p-3 w-full rounded-xl text-white font-medium">
              <h1>
                راننده: <span>جاسم جاساز</span>
              </h1>
              <h3>
                تاریخ: <span>1403/03/26</span>
              </h3>
              <h3>
                مبدا: <span>بابل. موزیرج و...</span>
              </h3>
              <h3>
                مقصد: <span>بابل. موزیرج و...</span>
              </h3>
            </div>
            <div className="bg-mediumPurple p-3 w-full rounded-xl text-white font-medium">
              <h1>
                راننده: <span>جاسم جاساز</span>
              </h1>
              <h3>
                تاریخ: <span>1403/03/26</span>
              </h3>
              <h3>
                مبدا: <span>بابل. موزیرج و...</span>
              </h3>
              <h3>
                مقصد: <span>بابل. موزیرج و...</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
