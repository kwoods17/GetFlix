import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.section`
  #hero-container {
    background-image: url('/images/Heroimg.png');  
    background-color: red; 
    height: 30vh; 
     width: 100vw;
  }`

function Hero() {
    return (
        <StyledHero id="hero-container">
            {/* Content for the hero section will go here later */}
        </StyledHero>
    );
}

export default Hero;
