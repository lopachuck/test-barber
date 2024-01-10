import styled, { keyframes } from 'styled-components'
import { PageWrapper, Subtitle, Title, TitleWrapper } from '../Page/page.styles'
import { devices } from '../../devices'
import { Link, NavLink } from 'react-router-dom'
import { WorkTime } from '../Contacts/contacts.styles'

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
export const AboutUsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 140px;

    & > div {
        padding: 120px 0 120px 0;
        & > h2{
            text-transform: uppercase;
        }
    }
    @media ${devices.md} {
        flex-direction: column;
        gap: unset;
        & > picture {
            order: 1;
            & > img{
                width: 100%;
            }
        }
        & > div{
            order: 2;
            padding-top: 28px;
            padding-bottom: 56px;
        }
    }
`

export const HiringBlock = styled.p`
    margin-top: 60px;
    text-align: right;
    white-space: nowrap;
    width: auto;

    color: ${({ theme }) => theme.colors.white};

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
    @media ${devices.md} {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-top: unset;
        text-align: left;
        white-space: unset;
        max-width: 30ch;
        //white-space: pre;
        & span {
            display: none;
        }

        & a {
            text-align: left;
            //display: inline-block;
            //text-align: left;
        }

    }

    & span:before {
        content: "- ";
        display: inline;
        width: 10px;
        height: 10px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    }
`

export const AboutUs = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 96px;
    margin-bottom: 100px;

    & h2 {
        margin-bottom: 28px;
        color: ${({ theme }) => theme.colors.white};
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px; /* 120% */
        letter-spacing: -0.8px;
    }

    & div p {
        margin-bottom: 28px;
        color: ${({ theme }) => theme.colors.white};

        max-width: 460px;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px; /* 144.444% */
        
    }

    & a {
        color: ${({ theme }) => theme.colors.accentColor};
            //border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};

        text-decoration-line: underline;
        text-underline-offset: 2px;
        //text-align: center;

        /* Actions-Navigation */
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 150% */
        text-transform: uppercase;
    }
    
    @media ${devices.md} {
        width: 100%;
        margin-top: 40px;
        margin-bottom: 40px;
    }
`

export const AboutLink = styled(Link)`
        // border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};
`

export const Metrics = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;

    padding-top: 39px;
    padding-bottom: 39px;
    border-top: 1px solid ${({theme}) => theme.colors.elementsGrey};
    border-bottom: 1px solid ${({theme}) => theme.colors.elementsGrey};
    @media ${devices.md} {
        padding-top: 28px;
        padding-bottom: 28px;
        justify-content: space-between;
    }
    @media ${devices.xs} {
        max-height: 140px;
    }
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

    & :first-child {
        color: ${({theme}) => theme.colors.accentColor};
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px; /* 120% */
        letter-spacing: -0.8px;
        @media ${devices.xs} {
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px; /* 133.333% */
            letter-spacing: -0.252px;
        }
    }

    & :last-child {
        color: ${({theme}) => theme.colors.white};

        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.252px;
        @media ${devices.xs} {
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
        }
    }
    @media ${devices.md} {
        width: 200px;
        height: 112px;
    }
    @media ${devices.xs} {
        width: 100px;
        height: unset;
    }
`
export const Gallery = styled(PageWrapper)`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 100px;

    & > * {
        text-align: center;
    }
`
export const GalleryTitle = styled.h2`
    text-transform: uppercase;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 120% */
    letter-spacing: -0.8px;
    padding-bottom: 28px;
`
export const GallerySubtitle = styled.h4`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding-bottom: 40px;
`

export const GalleryLink = styled(NavLink)`
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.accentColor};
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin-left: 4px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};
`

export const ImagesContainer = styled.div`
    display: flex;
    max-width: 1160px; //@todo rm after merge
    gap: 40px;
    padding-bottom: 100px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.elementsGrey};
`

export const ImagesColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const GalleryImageBig = styled.picture`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 516px;
    width: 360px;
    overflow: hidden;

    & > img {
        height: 100%;
        object-fit: cover;
    }

`
export const GalleryImageSmall = styled(GalleryImageBig)`
    max-height: 296px;

    & > img {
        height: unset;
        width: 100%;
    }
`

export const Localization = styled(PageWrapper)`
    padding-top: 100px;
    padding-bottom: 100px;

    & > div {
        display: flex;
        justify-content: space-between;
        padding-bottom: 40px;
    }
`
export const Address = styled(Link)`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
    &:before{
        content: url("/svg/icons/location.svg");
    }
`

export const LocalizationTitle = styled(GalleryTitle)`
    color: ${({ theme }) => theme.colors.white};
`
export const LocalizationWorkTime = styled(WorkTime)`
    display: flex;
    align-items: flex-end;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
    padding-bottom: 0;
    &:before{
        content: url("/svg/icons/time.svg");
        width: 32px;
        height: 32px;
    }
`