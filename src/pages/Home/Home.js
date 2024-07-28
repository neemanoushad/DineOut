import React from 'react';
import './Home.css';
import Image from'../../pages/ImagesCard/Image'

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to Dine Out</h1>
        <p>Experience the best culinary delights in town</p>
        <button className="reserve-button">Explore</button>
      </header>
      <Image/>
      
    </div>
  
  
    
  );
};


export default Home;
