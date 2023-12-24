import styled from 'styled-components'
import { devices } from '../../devices'
import {NavLink} from "react-router-dom";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
    
    
`
export const LogoWrapper = styled.div`
    width: 60px;
`
export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 60px;
`
export const LangMenuWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 72px;
    align-items: center;
`
export const LangMenu = styled.span`
    display: flex;
    height: 32px;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    /* Actions-Navigation */
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
    &:after {
        content: url('/svg/icons/down.svg');
        width: 32px;
        height: 32px;
        align-self: center;
    }
`
export const BookingBtnWrapper = styled.div`
  display: flex;
    height: 100%;
    align-items: center;
    gap: 32px;
    //justify-self: flex-end;
    margin-left: auto;
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