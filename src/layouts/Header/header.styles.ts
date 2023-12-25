import styled from 'styled-components'
import { devices } from '../../devices'
import {NavLink} from "react-router-dom";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
    @media ${devices.md} {
        flex-wrap: wrap;
        margin: 0 auto;
    }
`
export const LogoWrapper = styled.div`
    @media ${devices.md} {
        display: flex;
        width: 100%;
        height: 60px;
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
    @media ${devices.xl} {
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
    //justify-self: flex-end;
    margin-left: auto;
    @media ${devices.md} {
        height: 60px;
    }
`
export const BookingBtn = styled(NavLink)`
    text-decoration: none;
    display: flex;
    height: 40px;
    width: 136px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 24px;
    border: 1px solid  #6B6B6B;
    background:  #FFC32A;
    color:  #252429;
    text-align: center;
    /* Button */
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
    text-transform: uppercase;
`

export const Logo = styled.img`
    width: 60px;
    padding-top: 7px;
`