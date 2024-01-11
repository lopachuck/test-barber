import styled, { keyframes } from 'styled-components'
import { Subtitle, Title, TitleWrapper } from '../Page/page.styles'
import { devices } from '../../devices'
import { Link } from 'react-router-dom'

import arrowDown from '../../assets/icon/arrow_down.svg'
import logo from '../../assets/svg/banner/Animation.svg'
import instagramIcon from '../../assets/svg/social/instagram.svg'
import fbIcon from '../../assets/svg/social/facebook.svg'

interface GalleryImageGridProps {
    images: string[];
}


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
    margin-top: 392px; // @see 472px - 80px h socialWrapper with 2 soc Icons, change mt after add 3rd (and next) soc icons
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-end;
    @media ${devices.md} {
        margin-top: 232px; /// 232 height tab - 80 h Header desktop ; TAB header 137px @todo fix 137px
    }
`
const SocialLink = styled(Link).attrs({
    target: '_blank',
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
    margin-top: 43px;
    margin-left: 104px;
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
    width: 10000px;
    left: 0;
    bottom: 0;
    height: 73px;
    background-image: url(${logo});
    background-size: 1180px 71px;
    background-repeat: repeat-x;

    overflow: hidden;
    transform: translate(100%, 0);


    animation: ${marqueeAnimation} linear infinite forwards;
    animation-direction: normal;
    animation-duration: 200s;
`
export const LogoLine2 = styled(LogoLine)`
    animation: 200s ${marqueeAnimation} 100s linear infinite forwards;
    overflow: hidden;
`


