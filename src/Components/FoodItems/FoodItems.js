import React,{useState,useEffect}from 'react'
import './FoodItems.css'

import {Link} from 'react-router-dom'
import data from '../Data/Data'                      


function FoodItems() {
    const [Food, setFood] = useState([])
    useEffect(() => {
    const fetchImage=()=>{
      
        // setFood(data);

    }
    fetchImage()
    }, [])
    

  return (
    <div className='food-container'>
        {
            data.map((images)=>(
                <div className="food-info" key={images.id}>
        <img src={images.url} alt="alter" />
            <h3>{images.title}</h3>
            <p>Rs.{images.price}</p>
            <Link to={`/fooddetails/${images.id}`}>
            <button>Food Details</button>
            </Link>
        </div>
                
            ))
        }
     
        

    </div>
  )
}

export default FoodItems