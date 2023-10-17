import { Link } from "react-router-dom";
import { cards } from "../Utiliity";

function Moviecard({image}){
    return(
       <Link to={"/moviedetails"}>
       

<div className="">
    <img className="w-[40vh] h-[40vh] rounded-xl object-cover" src={image.image} alt="" />
</div>
</Link>
)


}
export default Moviecard