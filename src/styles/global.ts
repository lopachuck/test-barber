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
      width: 100%;
      min-height: 100%;
      height: max-content;
      overflow: hidden;
  }
  
  html, body {
      height: 100%;
      width: 100%;
      margin: 0 auto;
      background-color: ${({theme}) =>theme.colors.background};
      font-family: 'Inter', sans-serif;
  }

`