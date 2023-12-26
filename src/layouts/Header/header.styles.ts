import styled from 'styled-components'
import { devices } from '../../devices'
import {NavLink} from "react-router-dom";

export const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    background: ${({ theme }) => theme.colors.background};
    max-width: 1160px;
    width: calc(100% - 200px);
    top: 0;
    flex-direction: row;
    height: 80px;
    z-index: 10;
    @media ${devices.lg} {
        width: calc(100% - 200px);
    }
    @media ${devices.md} {
        flex-wrap: wrap;
        margin: 0 auto;
        width: calc(100% - 120px);
        height: fit-content;
    }
    @media ${devices.xs} {
        width: calc(100% - 32px);
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
export const BookingBtn = styled(NavLink)`
    text-decoration: none;
    display: flex;
    height: 40px;
    width: 136px;
    box-sizing: border-box;
    padding-left: 28px;
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
    position: relative;
    overflow: hidden;
    &:before{
        position: absolute;
        content: url("/svg/icons/shape.svg");
        transform: translateX(-45px);
    }
    &:hover{
        background: ${({theme}) => theme.colors.white};
        padding-left: 38px;
        &:before{
            left: 18px;
            transform: translateX(-4px);
            transition: transform 0.3s ease-in-out;
        }
    }
    
`

export const Logo = styled.img`
    width: 60px;
    padding-top: 7px;
`