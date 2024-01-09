import styled, {keyframes} from "styled-components";
import BG from '../../assets/home/bg_title.jpeg'
import {PageWrapper} from "../Page/page.styles";

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
export const HomePageWrapper = styled(PageWrapper)`
    background-image: url(${BG});
    background-position: center;
    max-height: 950px;
    background-repeat: no-repeat;
    background-origin: border-box;
`

export const AboutUs = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow: visible;
    width: 100vw;
`
export const BrendAnimation = styled.object`
    display: flex;
    width: 100%;
    animation: ${marqueeAnimation} 10s linear infinite;
`


