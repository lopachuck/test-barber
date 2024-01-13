import styled from "styled-components";
import {Link} from "react-router-dom";
import iconWaze from '../../assets/svg/map/Waze.svg'
import iconGoogle from '../../assets/svg/map/google-maps.svg'
import {devices} from "../../devices";
export const MarkerInfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    &>p{
        text-transform: uppercase;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        color: ${({theme}) => theme.colors.background};
        @media ${devices.xs} {
            font-size: 14px;
        }
    }
`

export const LinkWrapper = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    &>a{
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
        text-decoration-line: underline;
        @media ${devices.xs} {
            font-size: 12px;
        }
    }
`
export const LinkDirectionWaze = styled(Link)`
    display: flex;
    flex-direction: row;
    &:before{
        width: 20px;
        height: 20px;
        content: url(${iconGoogle});
        align-items: center;
        margin-right: 2px;
    }
`
export const LinkDirectionGoogle = styled(Link)`
    display: flex;
    flex-direction: row;
    &:before{
        width: 20px;
        height: 20px;
        content: url(${iconWaze});
        background-color: ${({theme}) => theme.colors.white};
        border-radius: 3px;
        margin-right: 4px;
    }
`