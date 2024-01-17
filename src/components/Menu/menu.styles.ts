import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { devices } from '../../devices'

export interface IOpenMenuProps {
    isMenuOpen: boolean
}

export const MenuWrapper = styled.nav<IOpenMenuProps>`
    display: flex;
    gap: 32px;
    @media ${devices.md} {
        display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
        flex-direction: column;
        gap: 16px;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        height: 100dvh;
        width: 100%;
        z-index: 100;
        padding-top: 215px;
        align-items: center;
        justify-content: center;
        overflow: scroll;
        background: ${({theme}) => theme.colors.background};
    }
    @media ${devices.ipad7thLandscape} {
        gap: 12px;
    }
    @media ${devices.ipadLandscape} {
        gap: 12px;
    }
    @media ${devices.redmi12proPlus5g} {
        padding-top: 36px;
    }
    @media ${devices.redmi12proPlus5gLandscape} , ${devices.iphoneSELandscape}, ${devices.redminote7Landscape} {
        & > div:first-child {
            margin-top: 52px;            
        }
        padding-top: 36px;
    }
    @media ${devices.sm} {
        padding-top: 56px;
    }
`
export const MenuItem = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    @media ${devices.md} {
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 40px;
        padding-right: unset;
    }
`
export const MenuItemLink = styled(NavLink)`
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
    &.active{
        color: ${({ theme }) => theme.colors.accentColor};
    }
`
export const MenuItemText = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
`