import React from 'react'
import"./Service.css"

function Service() {
  const Servicedata=[
    {
id:"1",
title:"Catering Services",
description:"At Dine Out, we offer personalized catering for events of all sizes. Whether it's an intimate gathering or a corporate event, our dishes are crafted with fresh, quality ingredients to suit your taste and occasion"
  },
    {
id:"2",
title:"Home Delivery",
description:"Enjoy the convenience of our home delivery service, bringing our delicious homemade meals straight to your doorstep. Whether you're hosting a family dinner or simply craving a comforting meal at home, we ensure a delightful dining experience without leaving your home."
  },

]
  return (
    <div className="main">
      <h1>Our Services</h1>
    <div className='service-main'>
      {
Servicedata.map((item,index)=>(
  <div className="service-box" key={item.index}>
    <div className="service-items">
    <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      </div>
))
      }
      
</div>
    </div>
  )
}

export default Service