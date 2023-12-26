import {createGlobalStyle} from "styled-components";
import {devices} from "../devices";


export default createGlobalStyle`
  * {
    margin: 0 ;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  #root {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      height: max-content;
      margin: 0 140px;
      @media ${devices.xl} {
          margin: 0 100px;
      }
      @media ${devices.md} {
          margin: 0 60px;
      }
      @media ${devices.xs} {
          margin: 0 16px;
      }
      
  }
  
  html, body {
      height: 100%;
      width: 100%;
      margin: 0 auto;
      background-color: ${({theme}) =>theme.colors.background};
      font-family: 'Inter', sans-serif;
      max-width: 1440px;
      
  }
  body {
  
  }
`