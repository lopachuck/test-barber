import styled from "styled-components";
import {NavLink} from "react-router-dom";
import { devices } from '../../devices'


export const MenuItem = styled.div`
    padding-right: 32px;
    display: flex;
    height: 100%;
    align-items: center;
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
