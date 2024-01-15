import styled from 'styled-components'
import { devices } from '../../devices'

export const ContactInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media ${devices.xs} {
        flex-direction: column;
    }
`
export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 700;

    & > span,
    & > a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        display: flex;
        align-items: center;
        padding-bottom: 12px;
        & > img {
            padding-right: 8px;
        }
    }
    @media ${devices.xs} {
        order: 2;
    }
`
export const WorkTime = styled.div`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    padding-bottom: 12px;
    & > img {
        padding-right: 8px;
    }
    & > div > span, & > div > p {
        white-space: nowrap;
    }
`
export const ContactsSocialWrapper = styled.div`
    display: flex;
    gap: 24px;
    color:  ${({ theme }) => theme.colors.white};
    text-align: right;
    /* Headline4 */
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
    flex-direction: column;
    @media ${devices.xs} {
        order: 1;
        align-items: center;
    }

    & div {
        flex-direction: row;
        justify-content: end;
    }
`
export const MapWrapper = styled.div`
    padding-bottom: 60px;
    padding-top: 44px;
`