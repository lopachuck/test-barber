import styled from 'styled-components'
import { devices } from '../../devices'
import {NavLink} from "react-router-dom";

export const HeaderContainer = styled.header`
    display: flex;
    position: sticky;
    background: ${({ theme }) => theme.colors.background};
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
        &>img{
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
export const LangMenuOptions = styled.div `
    display: none;
    &.menuOpen{
        display: flex;
        flex-direction: column;
        width: 162px;
        min-height: 48px;
        background: ${({ theme }) => theme.colors.background};
        border-radius: 12px;
        border: 1px solid ${({ theme }) => theme.colors.elementsGrey};
        position: absolute;
        top: 60px;
        left: -2px;
    }
`
export const LangMenuOption =styled.span `

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