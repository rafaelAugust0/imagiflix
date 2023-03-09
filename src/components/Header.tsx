import React from "react";

import background from '../assets/hero.jpg'

const Hero = () => (
    <header className="min-h-screen">
        <img  className="object-cover object-center h-full w-full" 
            src={background}  
            alt='filme em destaque'
        />
    </header>
);

export default Hero;