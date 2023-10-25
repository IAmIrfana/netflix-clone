import {AiFillHome} from "react-icons/ai"
import {IoIosContact} from "react-icons/io"
import {BsFillBookmarkPlusFill} from "react-icons/bs"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <div className="fixed bg-black bottom-0  w-[100%] py-1" >
            <div className="text-3xl flex justify-evenly">
                <Link to={`/`}><AiFillHome className=""/></Link>
              <Link to={"/watchlist"}>
                <BsFillBookmarkPlusFill/>
                </Link>
                <IoIosContact/>
            </div>
        </div>
    )
}
export default Footer