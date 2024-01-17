import styled from 'styled-components'
import { devices } from '../../devices'
import BG_4k from '../../assets/home/4k_3840_2160.jpeg'
import BG_fhd from '../../assets/home/fhd_1920_1080.jpg'
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
    height: 100dvh;
    transition: all 0.5s linear;
    position: relative;
    background: url(${BG_4k}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: 100% calc(100vh + 80px);
    background-position-y: -80px;
    background-position-x: center;
    @media ${devices.fhd} {
        background: url(${BG_fhd}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: 100% calc(100vh + 80px);
        background-position-y: -80px;
        background-position-x: center;
    }
    @media ${devices.md} {
        background: url(${BG_tablet_VERTICAL}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: auto calc(100vh + 80px);
        background-position-y: -80px;
        background-position-x: center;
    }
    @media ${devices.redmi12proPlus5g} {
        background: url(${BG_mobile_VERTICAL}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: auto calc(100vh + 80px);
        background-position-y: 10px;
        background-position-x: center;
    }
    @media ${devices.redmi12proPlus5gLandscape} {
        background: url(${BG_fhd}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: 100% calc(100vh + 80px);
        background-position-y: -80px;
        background-position-x: center;
    }
    @media ${devices.iphoneSELandscape} {
        background: url(${BG_fhd}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: 100% calc(100vh + 80px);
        background-position-y: -80px;
        background-position-x: center;
    }
}

`