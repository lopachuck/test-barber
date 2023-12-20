import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0 ;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
      background-color: #252429;
      
      
  }
  
  #root {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      height: max-content;
      margin: 0 140px;
      
      
  }
  
  html, body {
      height: 100%;
      width: 100%;
      margin: 0 auto;
  }
  body {
      max-width: 1440px;
  }
`