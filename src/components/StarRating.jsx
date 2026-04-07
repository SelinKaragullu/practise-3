import {useState} from 'react'
import {FaStar}
 from 'react-icons/fa'
export default function StarRating ({noOfStars=5}) {

    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState (0)


    return ( <div>
    {[...Array(noOfStars)].map((_,index)=><FaStar key={index}/>)}
    </div>)
    
}