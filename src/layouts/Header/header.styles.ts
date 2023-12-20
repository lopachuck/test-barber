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
    padding-left: 185px;
`
export const BookingBtnWrapper = styled.div`
  display: flex;
    height: 100%;
    align-items: center;
    padding-left: 32px;
`
export const BookingBtn = styled(NavLink)`
    text-decoration: none;
    display: flex;
    height: 40px;
    padding: 10px 28px;
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
export const LangMenu = styled.span`
    color:  #FFF;
    /* Actions-Navigation */
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
    &:after {
        content: url('/svg/icons/arrow.svg');
        width: 10px;
        height: 10px;
        margin: 0 5px;
    }
`
export const Logo = styled.img`
    width: 60px;
    padding-top: 7px;
`