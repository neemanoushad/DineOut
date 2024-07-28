import React, { useEffect ,useState} from 'react'
import './Image.css'
import image1 from '../../Components/Data/images/1.jpg'
import image2 from '../../Components/Data/images/2.jpg'
import image3 from '../../Components/Data/images/3.webp'
import image4 from '../../Components/Data/images/4.jpeg'
import image5 from '../../Components/Data/images/5.jpg'
import image6 from '../../Components/Data/images/6.jpg'


function Image() {
    const [Image, setImage] = useState([]);
    const handleSubmit=()=>{
        window.confirm('Order Placed!!!')
    }
    useEffect(() => {
        const fetchImage=()=>{
            const data=[
                {
                    id:1,
                    url:image1,
                    title:"Chicken Steek"
                },
                {
                    id:2,
                    url:image2,
                    title:"Chicken Soup"
                },
                {
                    id:3,
                    url:image3,
                    title:"Chicken Burger"
                },
                {
                    id:4,
                    url:image4,
                    title:"Noodles"
                },
                {
                    id:5,
                    url:image5,
                    title:"Biriyani"
                },  
                {
                    id:6,
                    url:image6,
                    title:"Bao Bun"
                }
               
            ]
            setImage(data);

        }
        fetchImage();
      
    }, [])
    
  
  return (
    <div id="image">
    <div className="newsection">
    <h1>SPECIALS</h1>
      <div className="image-grid">
        {
            Image.map((image)=>
            <div className="image-card" key={image.id}>
                <img src={image.url} alt="" />
            <div className="image-details">
                <h3>{image.title}</h3>
                <button onClick={handleSubmit}>Order Now</button>
            </div>

        </div>)
        }
     

</div>
      </div>

    </div>
  )
}

export default Image