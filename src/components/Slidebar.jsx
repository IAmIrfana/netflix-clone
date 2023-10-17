import { useEffect, useState } from "react";
import { images } from "../Utiliity"
import {PiDotsThreeOutline} from "react-icons/pi"
function Slidebar(){
    const [nextImage,setNextImage]=useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
          if (images.length > 0) {
              // 1st solution
            setNextImage((prevNextImage) => (prevNextImage + 1) % images.length);
          //   OR 2nd solution 
        //   setNextImage((prevNextImage) => {
        //       if (prevNextImage + 1 < images.length) {
        //         return prevNextImage + 1;
        //       } else {
        //         return 0;
        //       }
        //     });
            
            console.log(nextImage);
      
            // Check if 'nextImage' is equal to the length of the images array
            if (nextImage === images.length - 1) {
              // Reset 'nextImage' to 0 if it's at the end of the array
              setNextImage(0);
            }
          }
        }, 4000);
      
        return () => {
          clearInterval(intervalId);
        };
      }, [images, nextImage]);
    return(
        <div className="relative">
        
            {/* {images.map((item,index)=><div key={index}> */}
                <div>
                    <img className="w-[100%] h-[60vh] object-cover" src={images[nextImage].image} alt="" />
                </div>
                {/* slide icon */}
                <div>
                <PiDotsThreeOutline className="text-5xl absolute bottom-1  w-[100%]"/>
                </div>
            
        </div>
    )
}
export default Slidebar