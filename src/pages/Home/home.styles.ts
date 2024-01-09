import styled, { keyframes } from 'styled-components'
import { Subtitle, Title, TitleWrapper } from '../Page/page.styles'
import arrowDown from '../../assets/icon/arrow_down.svg'

import logo from '../../assets/svg/banner/Animation.svg'
import { devices } from '../../devices'
import { Link } from 'react-router-dom'


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
    margin-top: 515px;
    //margin-top: 595px;
    margin-bottom: 60px;
    @media ${devices.md} {
        margin-top: 355px; /// 355 height tab - 80 h Header desktop ; TAB header 137px
    }
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
    margin-left: 0;
    padding-top: 0;
`
export const LogoLineWrap = styled.div`
    height: 110px;
    width: 100%;
    position: relative;
    overflow: hidden;
`
export const LogoLine = styled.div`
    position: absolute;
    z-index: 9999;
    //width: 1000px;
    width: 10000px;
    //width: 44240px;
    //width: 40000px;
    left: 0;
    //bottom: 42px;
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
export const AboutUsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 140px;

    & > div {
        padding: 120px 0 120px 0;
    }
`

export const HiringBlock = styled.p`
    margin-top: 60px;
    //display: flex;
    //flex-direction: row-reverse;
    text-align: right;
    text-wrap: nowrap;
    width: auto;

    color: ${({ theme }) => theme.colors.white};

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
`

export const AboutUs = styled.section`
    display: flex;
    flex-direction: column;
    //min-height: 784px;
    margin-top: 96px;
    margin-bottom: 100px;
    //margin-left: auto;
    //margin-right: auto;
    //padding: 100px 0 0 0;
    //padding: 100px 140px 0;

    & h2 {
        margin-bottom: 28px;
        color: ${({ theme }) => theme.colors.white};
        /* Headline1 */
        //font-family: Inter, serif; @todo discuss
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px; /* 120% */
        letter-spacing: -0.8px;
    }

    & div p {
        margin-bottom: 28px;
        color: ${({ theme }) => theme.colors.white};

        width: 460px;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px; /* 144.444% */
    }

    & a {
        color: #FFC32A;
        text-align: center;

        /* Actions-Navigation */
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 150% */
        text-transform: uppercase;
    }
`

export const AboutLink = styled(Link)`

`

export const Metrics = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;

    & div {
        width: 360px;
        height: 80px;
    }
    padding-top: 39px;
    padding-bottom: 39px;
    border-top: 1px solid #6B6B6B;
    border-bottom: 1px solid #6B6B6B;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 80px;
    & :first-child{
        color: #FFC32A;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px; /* 120% */
        letter-spacing: -0.8px;
    }
    
    & :last-child{
        color: #FFF;

        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.252px;
    }
`