export default function Login(){
    return(
        <>
        <div className="bg-backPurple h-screen flex justify-center items-center">
            <div className="bg-lightPurple h-[65%] w-[35%] rounded-2xl flex flex-col items-center text-white">
                <p className="my-4 font-bold text-[40px]">Logo</p>
                <div className="my-5">
                    <p className="mb-2">شماره تماس</p>
                    <input className="fill-none rounded-md border-2 border-" type="text" />
                </div>
            </div>
        </div>
        </>
    );
}