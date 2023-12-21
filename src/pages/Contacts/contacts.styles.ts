import styled from "styled-components";
import {Link} from "react-router-dom";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
`
export const PageInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
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
`
export const WorkTime = styled.div`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    padding-bottom: 12px;
    & > img {
        padding-right: 8px;
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
`
export const SocialIconWrapper = styled.div`
    margin-top: 24px;
`
export const SocialIcon = styled(Link)`
    margin-left: 16px
`
export const MapWrapper = styled.div`
    padding-bottom: 60px;
    padding-top: 44px;
`