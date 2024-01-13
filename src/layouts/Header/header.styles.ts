import styled from 'styled-components'
import { devices } from '../../devices'
import checkmark from '../../assets/icon/checkmark.svg'
import { NavLink } from 'react-router-dom'

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
    max-width: 1440px;
    padding: 0 140px;
    width: 100%;
    top: 0;
    flex-direction: row;
    height: 80px;
    z-index: 10;
    margin: 0 auto;
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
export const LogoWrapper = styled(NavLink)`
    @media ${devices.md} {
        display: flex;
        width: 100%;
        height: 60px;
        text-decoration: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.elementsGrey};
        & > img {
            width: 40px;
            margin: auto;
        }
    }
`
export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 60px;
    @media ${devices.md} {
        margin-left: unset;
    }

`
export const LangMenuWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 70px;
    align-items: center;
    position: relative;
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
    @media ${devices.sm} {
        display: none;
    }
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
    margin-left: auto;
    @media ${devices.md} {
        height: 60px;
    }
`

export const Logo = styled.img`
    width: 60px;
    padding-top: 7px;
`