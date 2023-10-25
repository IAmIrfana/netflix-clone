import { FiSearch } from "react-icons/fi"
import { GoLocation } from "react-icons/go"
import { IoMdNotificationsOutline } from "react-icons/io"

function Header() {
    return (
        <div className=" fixed top-0 left-0 right-0 z-10 flex justify-between bg-black ">
            <div className="text-white text-center flex items-center  relative h-[10vh] ">
                <div className="relative w-[400px] ">
                    <h1 className="flex text-red-700 font-extrabold text-2xl absolute right-20 -top-3"><span className="transform scale-x-[-1]">S</span>HOT</h1>

                    <h1 className="font-extrabold text-4xl">Movie</h1>
                </div>

            </div>
            {/* search bar */}
            <div className="flex text-2xl mt-8 gap-4">
                <div className="flex">
                    <div className="hidden md:block bg-white  h-[5vh] rounded-xl">
                        <div className="flex">
                            <FiSearch className="text-black mt-1" />

                            <input className="w-[40vh] h-[5vh] rounded-2xl " type="text" placeholder="Search " />
                        </div>

                    </div>

                    <FiSearch className="md:hidden" />
                </div>
                <GoLocation />
                <IoMdNotificationsOutline />
            </div>

        </div>
    )
}
export default Header