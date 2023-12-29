import styled from "styled-components";
import {devices} from "../../devices";

export const PageTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    &>div{
        margin: 0;
    }
`

export const PageSubtitle = styled.div`
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.textSecondary};
    max-width: 525px;
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
`
export const BarbersInfo = styled.div`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    max-width: 1160px;
    height: auto;
    margin: 40px 0;
    @media ${devices.md} {
        gap: 24px;
    }
    @media ${devices.xs} {
        gap: 12px;
    }
`

export const BarberPhoto = styled.picture`
    display: flex;
    width: 360px;
    height: 360px;
    @media ${devices.md} {
        width: 200px;
        height: 200px;
    }
    @media ${devices.xs} {
        width: 158px;
        height: 158px;
    }
`
export const BarberName = styled.div`
    padding-top: 16px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
`
export const BarberPosition = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`

export const JoinUsInfoWrapper = styled.div`
    padding-bottom: 60px;
`

export const BarberInfo = styled.div`
    color: ${({theme}) => theme.colors.white};
`
export const InfoTitle = styled.div`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 116.667% */
    letter-spacing: -0.336px;
    color: ${({ theme }) => theme.colors.white};
    
`
export const InfoText = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: ${({theme}) => theme.colors.white};
    
`
export const MailLink = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.colors.accentColor};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
    border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};
`

