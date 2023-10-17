import {AiFillHome} from "react-icons/ai"
import {IoIosContact} from "react-icons/io"
import {BsFillBookmarkPlusFill} from "react-icons/bs"

function Footer(){
    return(
        <div className="fixed bg-black bottom-0  w-[100%] py-1" >
            <div className="text-3xl flex justify-evenly">
                <AiFillHome className=""/>
                <BsFillBookmarkPlusFill/>
                <IoIosContact/>
            </div>
        </div>
    )
}
export default Footer