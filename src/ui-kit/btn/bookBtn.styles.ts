import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {devices} from "../../devices";


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