import styled from "styled-components";
import {NavLink} from "react-router-dom";
import { devices } from '../../devices'

export interface IOpenMenuProps {
    isMenuOpen: boolean
}
export const DesktopMenuWrapper = styled.nav<IOpenMenuProps>`
    display: flex;
    gap: 32px;
    @media ${devices.md} {
        display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
        position: fixed;
        flex-direction: column;
        height: calc(100% - 60px);
        width: calc(100% - 120px);
        z-index: 100;
        padding-top: 215px;
        align-items: center;
        justify-content: center;
        background: ${({theme}) => theme.colors.background};
    }
    @media ${devices.xs} {
        width: calc(100% - 32px);
    }
`
export const MenuItem = styled.div`
    //padding-right: 32px;
    display: flex;
    height: 100%;
    align-items: center;
    @media ${devices.md} {
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 40px;
        padding-right: unset;
    }
`
export const MenuItemLink = styled(NavLink)`
    text-decoration: none;
    color: #ffffff;
    &.active{
        color: #FFC32A !important;
    }
`
export const MenuItemText = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
`


export const MobileMenuWrapper = styled.div`
    display: none;
    @media ${devices.md}{
        display: flex;
    }
`

export const BurgerBtn = styled.div`
    display: none;
    @media ${devices.md} {
        display: flex;
        align-items: center;
        margin-left: 15px;
        position: relative;
        min-width: 30px;
        min-height: 30px;
        z-index: 200;
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.textCurrentItemMenu};
        border-radius: 50%;
    }
`
export const BtnLine = styled.div`
    @media ${devices.md} {
        display: block;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.white};
        width: 100%;
        height: 2px;
        top: 8px;
        transition: all 0.3s ease 0s;
    }
`
export const Cross = styled.div`
    @media ${devices.md} {
        position: relative;
        width: 24px;
        margin: 0 auto;
        height: 19px;
        z-index: 1;

        &:before,
        &:after {
            content: '';
            background-color: ${({ theme }) => theme.colors.white};
            position: absolute;
            width: 100%;
            height: 2px;
            transition: all 0.3s ease 0s;
        }

        &:before {
            top: 1px;
        }

        &:after {
            bottom: 2px;
        }

        &.cross > ${BtnLine} {
            display: none;
        }

        &.cross:after {
            transform: rotate(45deg);
            bottom: 8px;
        }

        &.cross:before {
            transform: rotate(-45deg);
            top: 9px;
        }
    }
`
export const MobileLangWrapper = styled.div`
    display: none;
    align-self: flex-end;
    justify-content: center;
    width: 100%;
    margin-top: auto;
    color: ${({theme}) => theme.colors.white};
    border-top: 1px solid ${({ theme }) => theme.colors.elementsGrey};
    padding-top: 20px;
    padding-bottom: 80px;
    gap: 20px;
    & > div{
        display: flex;
        width: 58px;
        height: 40px;
        justify-content: center;
        align-items: center;
        border: 1px solid ${({ theme }) => theme.colors.elementsGrey};
        border-radius: 12px;
        cursor: pointer;
    }
    & > .selected{
        border: 1px solid ${({ theme }) => theme.colors.accentColor};
        
    }
    @media ${devices.md} {
        display: flex;
    }
`