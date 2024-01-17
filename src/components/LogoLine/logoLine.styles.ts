import styled from "styled-components";
import {devices} from "../../devices";

export const GAP_MOBILE = 28;
export const GAP_DESKTOP = 60;

export const LogoLineWrapper = styled.div`
    border-top: 4px solid ${({theme}) => theme.colors.white};
    border-bottom: 4px solid ${({theme}) => theme.colors.white};
    display: flex;
    align-items: center;
    width: max-content;
    overflow: hidden;
    padding: 12px 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    & div {
        display: flex;
        flex-direction: row;
        gap: ${GAP_DESKTOP}px;
    }
    @media ${devices.sm}, ${devices.xs_Landscape}{
        & div {
            gap: ${GAP_MOBILE}px;
        }
        & div svg {
            width: 105px;
            height: 20px;
            viewBox: 0 0 105px 20px;
        }
        border-top: 2px solid ${({theme}) => theme.colors.white};
        border-bottom: 2px solid ${({theme}) => theme.colors.white};
        bottom: 8px;
        padding: 6px 0;
    }
`