import styled, { keyframes } from 'styled-components'
import { Subtitle, Title, TitleWrapper } from '../Page/page.styles'
import arrowDown from '../../assets/icon/icon/arrow/down.svg'

import logo from '../../assets/svg/banner/Animation.svg'


const marqueeAnimation = keyframes`
    0% {
        transform: translate(0);
        //transform: translate(100%, 0);
    }

    50% {
        transform: translate(-50%, 0);
    }

    100% {
        transform: translate(-100%, 0);
    }
`

export const HomeTitleWrapper = styled(TitleWrapper)`
    margin-top: 595px;
    margin-bottom: 60px;
`

export const HomeSubtitle = styled(Subtitle)`
    position: relative;

    &:before {
        position: absolute;
        top: 0;
        left: -89px;
        display: flex;
        content: " ";
        width: 64px;
        height: 64px;
        background-image: url(${arrowDown});
    }
`
export const HomeTitle = styled(Title)`
    padding-top: 0;
`
export const LogoLine = styled.div`
    position: absolute;
    z-index: 9999;
    //width: 1000px;
    width: 10000px;
    //width: 44240px;
    //width: 40000px;
    left: 0;
    bottom: 0;
    height: 73px;
    //opacity: 0.4;
    background-image: url(${logo});
    background-size: 1180px 71px;
    background-repeat: repeat-x;
    //transform: translateX(0%);


    overflow: hidden;
    //width: 100%;
    transform: translate(100%, 0);


    animation: ${marqueeAnimation} linear infinite forwards;
    animation-direction: normal;
    animation-duration: 200s;
`
export const LogoLine2 = styled(LogoLine)`
    animation: 200s ${marqueeAnimation} 100s linear infinite forwards;
    overflow: hidden;
`
export const AboutUs = styled.div`
    display: flex;
`