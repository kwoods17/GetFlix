import React from 'react'
import styled from 'styled-components'
function Navigation() {
  
  return (
    <StyledNav>
      <StyledUl>
        <li><StyledLink href="#">Movies</StyledLink></li>
        <li><StyledLink href="#">TV Shows</StyledLink></li>
        <li><StyledLink href="#">Genres</StyledLink></li>
      </StyledUl>
    </StyledNav>
  )
}
const StyledNav = styled.nav`
background-color: #222;  /* Dark background */
    padding: 10px 0;         /* Top/bottom padding */
 `
const StyledUl = styled.ul`
     list-style-type: none;
     margin: 0;
     padding: 0;
     display: flex; /* Arrange links horizontally */
     gap: 20px; /* Spacing between links */
 `
const StyledLink = styled.a`
     text-decoration: none;
     color: #ccc;       /*  Lighter link color */
     font-size: 15px
     &:hover 
     color: #e50914;   /* GetFlix red hover */
     }
 `
export default Navigation; 
