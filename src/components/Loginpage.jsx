import { Link } from "react-router-dom"

function Loginpage(){
    return(
        <div>
                    <div className="text-white text-center flex items-center justify-center relative h-[45vh] ">
           <div className="relative w-[400px] ">
          <h1 className="flex text-red-700 font-extrabold text-3xl absolute right-6 -top-2"><span className="transform scale-x-[-1]">S</span>HOT</h1>

            <h1 className="font-extrabold text-6xl">Movie</h1>
           </div>

            </div>
            <div className="flex flex-col gap-5 items-center ">
                <Link to={"/"}>
                <div>

                <button className="text-white border-red-600 bg-red-600 rounded-2xl w-[61vh] py-3">Sign in</button>

                </div>
                </Link>
                <div >
                    <button className=" w-[61vh] p-3 flex justify-between items-center  border rounded-xl "><img className="w-5" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="icon" /> <h1 className="px-12">Continue with Google</h1></button>
                </div>
                <h1>Or</h1>
                <div>
                    <button className=" border rounded-xl w-[61vh] py-3">Create a New Account</button>

                </div>
            </div>

        </div>
    )
}
export  default Loginpage