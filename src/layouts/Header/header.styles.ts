import styled from 'styled-components'
import { devices } from '../../devices'
import checkmark from '../../assets/icon/checkmark.svg'
import { NavLink } from 'react-router-dom'
import IconLogoHeader from '../../assets/svg/header/logo.svg'

export const HeaderContainer = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    background: ${
            props => props.hideBG ?
                    ({ theme }) => theme.colors.backgroundHeader :
                    ({ theme }) => theme.colors.backgroundHeaderOpacity
    };
    background-size: auto 100%;
    z-index: 10;
`
export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    height: 80px;
    margin: 0 auto;
    padding: 0 140px;
    z-index: 10;
    position: relative;
    @media ${devices.lg} {
        padding: 0 100px;
    }
    @media ${devices.md} {
        flex-wrap: wrap;
        margin: 0 auto;
        height: fit-content;
        padding: 0 60px;
    }
    @media ${devices.sm} {
        padding: 0 16px;
    }
`
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    @media ${devices.md} {
        height: 60px;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.elementsGrey};
    }
    @media ${devices.xs_Landscape} {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 0;
        right: 0;
        border: none;
        margin: 10px auto;
    }
`
export const Logo = styled(NavLink)`
    background-image: url(${IconLogoHeader});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 60px;
    width: 60px;
    @media ${devices.md} {
        height: 40px;
        width: 40px;
        margin: 0 auto;
    }
`
export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 60px;
    @media ${devices.md} {
        margin-left: unset;
    }
    @media ${devices.iphone12landscape} {
        margin-left: unset;
    }
    @media ${devices.iphone12} {
        margin-left: unset;
    }
    @media ${devices.ipad7th} {
        margin-left: 36px;
    }
    @media ${devices.ipad} {
        margin-left: 36px;
    }
`
export const LangMenuWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 70px;
    align-items: center;
    position: relative;
    
    @media ${devices.xs_Landscape} {
        display: none;
    }
    @media ${devices.sm} {
        display: none;
    }
`
export const LangMenuBtn = styled.span`
    display: flex;
    height: 40px;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    /* Actions-Navigation */
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
    border: 1px solid ${({ theme }) => theme.colors.elementsGrey};
    border-radius: 12px;
    padding: 8px 12px;
    cursor: pointer;
`
export const LangMenu = styled.div`
    display: flex;
    width: 100px;
    max-width: 162px;
    align-items: center;
    gap: 0;
    flex-direction: column;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.colors.background};
    border-collapse: collapse;
    border-radius: 12px;
`

export const LangMenuOption = styled.div`
    display: flex;
    position: relative;
    width: 100px;
    max-width: 162px;
    padding: 12px 16px;
    align-items: flex-start;
    gap: 10px;
    color: ${({ theme }) => theme.colors.white};

    &:first-child {
        border-radius: 12px 12px 0 0;
    }

    &:last-child {
        border-radius: 0 0 12px 12px;
    }

    border: 1px solid ${({ theme }) => theme.colors.elementsGrey};
    background: ${({ theme }) => theme.colors.background};

    &:hover {
        cursor: pointer;

        &:not(:first-child) {
            border-top: 1px solid ${({ theme }) => theme.colors.background};
        }

        &:not(:last-child) {
            border-bottom: 1px solid ${({ theme }) => theme.colors.background};
        }
    }

    &:hover {
        border-left: 1px solid ${({ theme }) => theme.colors.elementsGrey};
        background: ${({ theme }) => theme.colors.elementsGrey};
    }

    &.active {
        &:after {
            content: " ";
            width: 24px;
            height: 24px;
            right: 16px;
            position: absolute;
            background-image: url(${checkmark});
        }
    }
`
export const BookingBtnWrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    gap: 32px;
    margin-left: 16px;
    @media ${devices.md} {
        height: 60px;
        gap: 16px;
    }
    @media ${devices.ipad7th} {
        gap: 16px;
    }
    @media ${devices.ipad} {
        gap: 16px;
    }
`