import styled from 'styled-components'
import { devices } from '../../devices'
import BG_4k from '../../assets/home/4k_3840_2160.jpeg'
import BG_fhd from '../../assets/home/fhd_1920_1080.jpg'
// import BG_tablel_HORIZONTAL from '../../assets/home/fhd_1920_1080.jpg'
import BG_tablet_VERTICAL from '../../assets/home/tablet_768_829.jpg'
import BG_mobile_VERTICAL from '../../assets/home/mobile_360_448.jpg'

export const PageWrapper = styled.div.attrs({
    className: 'container-wrapper',
})`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto ;
    padding: 0 140px;
    width: 100%;
    @media ${devices.lg} {
        padding: 0 100px;
    }
    @media ${devices.md} {
        max-width: 100vw;
        flex-wrap: wrap;
        margin: 0 auto;
        height: fit-content;
        padding: 0 60px;

    }
    @media ${devices.sm} {
        padding: 0 16px;
    }
`
export const Title = styled.h1`
    text-transform: uppercase;
    padding-top: 70px; // 150-height of header
    padding-bottom: 40px;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 120% */
    letter-spacing: -0.8px;
    color: ${({ theme }) => theme.colors.white};
    margin: 0 auto;
    @media ${devices.md} {
        padding-top: 40px;
    }
`
export const CenteredTitle = styled(Title)`
    text-align: center;
`
export const Subtitle = styled.div`
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.textSecondary};
    max-width: 525px;
`
export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > div {
        margin-left: 0;
    }
`

export const BgImage = styled.div.attrs(props => ({
    bgi: props.img || BG_4k,
}))`
    background: url(${BG_4k}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        //background: linear-gradient(0deg, rgba(37, 36, 41, 0.60) 0%, rgba(37, 36, 41, 0.60) 100%), url(${BG_4k}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: 100% 1024px;
    background-position-y: -80px;
    @media ${devices.fhd} {
        background: url(${BG_fhd}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: 100% 1024px;
        background-position-y: -80px;
    }
    @media ${devices.md} {
        background: url(${BG_tablet_VERTICAL}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: 100% 828px;
        background-position-y: -80px;
    }
    @media ${devices.xs} {
        background: url(${BG_mobile_VERTICAL}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: 100% 100dvh;
        background-position-y: 10px;
    }
    
`