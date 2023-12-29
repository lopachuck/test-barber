import styled from 'styled-components'
import { devices } from '../../devices'
import {NavLink} from "react-router-dom";

export const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    background: ${({ theme }) => theme.colors.background};
    max-width: 1440px;
    padding: 0 140px;
    width: 100%;
    top: 0;
    flex-direction: row;
    height: 80px;
    z-index: 10;
    @media ${devices.lg} {
        padding: 0 100px;
    }
    @media ${devices.md} {
        flex-wrap: wrap;
        margin: 0 auto;
        height: fit-content;
        padding: 0 60px;
    }
    @media ${devices.xs} {
        padding: 0 16px;
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
    display: flex;
    flex-direction: column;
    height: 40px;
    width: 136px;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid  ${({ theme }) => theme.colors.elementsGrey};
    text-align: center;
    text-decoration: none;
    /* Button */
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
    text-transform: uppercase;
    overflow: hidden;
    &>span{
        display: flex;
        flex: 0 0 auto;
        width: 136px;
        height: 40px;
        justify-content: center;
        align-items: center;
        background:  ${({theme}) => theme.colors.accentColor};
        color:  ${({theme}) => theme.colors.background};
        transition: transform 0.3s ease-in-out;
    }
    &>p{
        display: flex;
        flex: 0 0 auto;
        width: 136px;
        height: 40px;
        justify-content: center;
        align-items: center;
        background: ${({theme}) => theme.colors.white};
        color:  ${({theme}) => theme.colors.background};
        transition: transform 0.3s ease-in-out;
        &:before{
            padding-right: 8px;
            content: url("/svg/icons/shape.svg");
        }
    }
    &:hover{
        &>p,span{
            transform: translateY(-40px);
        }
        @media ${devices.md} {
            &>p,span{
                transform: unset;
            }
        }
    }
    
    
`

export const Logo = styled.img`
    width: 60px;
    padding-top: 7px;
`