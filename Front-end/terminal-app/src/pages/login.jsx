export default function Login(){
    return(
        <>
        <div className="bg-backPurple h-screen flex justify-center items-center">
            <div className="bg-lightPurple h-[65%] w-[35%] rounded-2xl flex flex-col items-center text-white font-iranyekan">
                <p className="my-4 font-bold text-[40px]">Logo</p>
                <div className="my-5 w-full flex flex-col px-10 justify-center">
                    <p className="mb-2 font-bold text-[25px]">شماره تماس</p>
                    <input className="bg-lightPurple rounded-[15px] border-2 border-backPurple p-3" dir="ltr" placeholder="+989123456789" type="text" />
                </div>
                <div className="my-5 w-full flex flex-col px-10 justify-center">
                    <p className="mb-2 font-bold text-[25px]">رمز عبور</p>
                    <input className="bg-lightPurple rounded-[15px] border-2 border-backPurple p-3" dir="ltr" type="text" />
                </div>
                <a className="bg-[#8B7AB8] h-auto w-[70%] flex justify-center font-bold text-[20px] py-3 mt-3 rounded-md" href="">ورود</a>
            </div>
        </div>
        </>
    );
}