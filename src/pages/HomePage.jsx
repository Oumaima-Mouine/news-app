import React from 'react';
import Footer from '../layouts/footer';
import Banner from '../components/banner/Banner';

function HomePage() {
  return (
    <>
      <Banner 
        title1="Welcome to Our Establishment"   
        title2="Where Excellence Meets Innovation"
        text="Discover our latest news and activities"
        image="/images/Tabi3a.jpg" // Add your image to public/images/
      />
    <Footer/>

    
    </>
  );
}

export default HomePage;