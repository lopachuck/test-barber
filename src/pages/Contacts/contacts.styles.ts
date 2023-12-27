import styled from "styled-components";
import {Link} from "react-router-dom";
import {devices} from "../../devices";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    width: 100%;
    @media ${devices.lg} {
        padding: 0 100px;
    }
    @media ${devices.md} {
        flex-wrap: wrap;
        margin: 0 auto;
        margin-top: 120px;
        height: fit-content;
        padding: 0 60px;
    }
    @media ${devices.xs} {
        padding: 0 16px;
    }
`
export const PageTitle = styled.div`
    text-transform: uppercase;
    padding-top: 60px;
    padding-bottom: 40px;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 120% */
    letter-spacing: -0.8px;
    color: ${({ theme }) => theme.colors.white};
    margin: 0 auto;
    @media ${devices.md} {
        padding-top: 40px;
    }
`
export const PageInfoWrapper = styled.div`
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
export const SocialWrapper = styled.div`
    color:  ${({ theme }) => theme.colors.white};
    text-align: right;
    /* Headline4 */
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
    display: flex;
    flex-direction: column;
    @media ${devices.xs} {
        order: 1;
        align-items: center;
    }
`
export const SocialIconWrapper = styled.div`
    margin-top: 24px;
    display: flex;
    @media ${devices.xs} {
        margin: unset;
        gap: 16px;
        padding-top: 16px;
    }
`
export const SocialIcon = styled(Link)`
    margin-left: 16px;
    @media ${devices.md} {
    margin: unset;
    width: 32px;
}
`
export const MapWrapper = styled.div`
    padding-bottom: 60px;
    padding-top: 44px;
`