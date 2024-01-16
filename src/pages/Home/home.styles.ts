import styled, { keyframes } from 'styled-components'
import { PageWrapper, Subtitle, Title, TitleWrapper } from '../Page/page.styles'
import { devices } from '../../devices'
import { Link } from 'react-router-dom'

import arrowDown from '../../assets/icon/arrow_down.svg'
import arrowDown32 from '../../assets/icon/arrow_down32.svg'
import logo from '../../assets/svg/banner/Animation.svg'
import instagramIcon from '../../assets/svg/social/instagram.svg'
import fbIcon from '../../assets/svg/social/facebook.svg'


const marqueeAnimation = keyframes`
    0% {
        transform: translate(0);
    }

    50% {
        transform: translate(-50%, 0);
    }

    100% {
        transform: translate(-100%, 0);
    }
`
export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-end;
`
export const HomePageWrapper = styled(PageWrapper)`
    flex-direction: column;
    justify-content: flex-end;
    height: 100dvh;
    transition: all 0.5s linear;
`
const SocialLink = styled(Link).attrs({
    target: '_blank',
    rel: 'nofollow noopener',
})`
    display: flex;
    width: 32px;
    height: 32px;
`
export const SocialLinkFacebook = styled(SocialLink)`
    background-image: url(${fbIcon});
`
export const SocialLinkInstagram = styled(SocialLink)`
    background-image: url(${instagramIcon});
`
export const HomeTitleWrapper = styled(TitleWrapper)`
    position: relative;
    margin-top: 44px;
    margin-left: 104px;
    margin-bottom: 133px;
    @media ${devices.xs} {
        margin-left: 60px;
        margin-bottom: 60px;
        position: relative;
        &:before {
            position: absolute;
            top: 24px;
            left: -36px;
            display: flex;
            content: " ";
            width: 32px;
            height: 32px;
            background-image: url(${arrowDown32});
        }
    }
    @media ${devices.ipad7th} {
        margin-left: 96px;
    }
    @media ${devices.ipad} {
        margin-left: 96px;
    }
    @media ${devices.redmi12proPlus5gLandscape} , ${devices.iphoneSELandscape} {
        margin-top: 24px;
        margin-bottom: 44px;
        &:before {
            position: absolute;
            top: 0;
            left: -36px;
            display: flex;
            content: " ";
            width: 32px;
            height: 32px;
            background-image: url(${arrowDown32});
        }
    }
    @media ${devices.redmi12proPlus5g} {
        margin-bottom: 44px;
        &:before {
            position: absolute;
            top: 24px;
            left: -36px;
            display: flex;
            content: " ";
            width: 32px;
            height: 32px;
            background-image: url(${arrowDown32});
        }
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


    @media ${devices.redmi12proPlus5g} {
        display: none;
    }
    @media ${devices.redmi12proPlus5gLandscape} , ${devices.iphoneSELandscape} {
        display: none;
    }
    @media ${devices.xs} {
        display: none;
    }
`
export const HomeTitle = styled(Title)`
    margin-left: 0;
    padding-top: 0;
    @media ${devices.md} {
        font-size: 54px;
        line-height: 60px;
    }
    @media ${devices.redmi12proPlus5g}{
        font-size: 24px;
        line-height: 28px; /* 116.667% */
        letter-spacing: -0.336px;
    }
    @media ${devices.redmi12proPlus5gLandscape} , ${devices.iphoneSELandscape}
    {
        font-size: 24px;
        line-height: 28px; /* 116.667% */
        letter-spacing: -0.336px;
    }
    @media ${devices.xs} {
        font-size: 24px;
        line-height: 28px; /* 116.667% */
        letter-spacing: -0.336px;
    }
`
export const LogoLineWrap = styled.div`
    height: 110px;
    width: 100%;
    position: relative;
    overflow: hidden;
`
export const LogoLine = styled.div`
    position: absolute;
    z-index: 9;
    width: 10000px;
    left: 0;
    bottom: 0;
    height: 72px;
    background-image: url(${logo});
    background-size: 1180px 70px;
    background-repeat: repeat-x;

    @media ${devices.xs}, ${devices.xs_Landscape} {
        background-image: url(${logo});
        background-size: contain;
        margin-bottom: 4px;
        //background-size: 1180px 34px;
        background-repeat: repeat-x;
        height: 36px;
        overflow: hidden;
        //transform: translate(100%, 0);
            // animation: ${marqueeAnimation} linear infinite forwards;
        //animation-direction: normal;
        //animation-duration: 200s;
    }
    //overflow: hidden;
    //transform: translate(100%, 0);


        //animation: ${marqueeAnimation} linear infinite forwards;
    //animation-direction: normal;
    //animation-duration: 200s;
`
export const LogoLine2 = styled(LogoLine)`
    animation: 200s ${marqueeAnimation} 100s linear infinite forwards;
    overflow: hidden;
`


