import React from 'react';
import styled from 'styled-components';
import Navigation from './navigation'; 
import SearchBar from './searchBar'

const StyledHeader = styled.header`
    background-color: #141414; 
    color: #E50914;
    padding: 20px;
    position: fixed; /* For sticky behavior */
    width: 100%;     /* Make header span full width */
    height: 5%;
    top: 0;          /* Stick to the top */
    h1 {
      font-family: 'sans-serif';  /*  choose different font later */
      font-size: 40px;            /* Adjust size as needed */ 
      margin-left: 10px;          /* Add some left margin */
  }
`

function Header() {
  return (
    <StyledHeader>
<div className="header-content">  
                <h1>GetFlix</h1>
                <Navigation />
                <SearchBar />
            </div>  
              </StyledHeader>
  )
}

export default Header
