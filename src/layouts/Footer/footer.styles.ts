import styled from 'styled-components'
import { devices } from '../../devices'
import { NavLink } from 'react-router-dom'
import { LinkDirectionGoogle, LinkDirectionWaze, LinkWrapper } from '../../components/GoogleMap/customGoogleMap.styles'
import { SocialWrapper } from '../../pages/Home/home.styles'
import IconLogoBig from '../../assets/icon/logo_big.svg'

export const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    padding: 0 140px;
    width: 100%;
    height: 314px;
    margin: 60px auto 0;
    @media ${devices.lg} {
        padding: 0 100px;
    }
    @media ${devices.md} {
        flex-wrap: wrap;
        height: fit-content;
        padding: 0 60px;
        margin: 60px auto 0;
    }
    @media ${devices.sm} {
        padding: 0 16px;

    }

`
export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 43px 0;
    min-height: 206px;
    width: 100%;
    border-top: 1px solid ${({theme}) => theme.colors.elementsGrey};
    border-bottom: 1px solid ${({theme}) => theme.colors.elementsGrey};
    @media ${devices.md} {
        gap: 40px;
    }
    @media ${devices.m} {
        gap: unset;
        flex-direction: column;
        height: fit-content;
        padding: unset;
    }
`
export const FooterColumn = styled.div`
    color: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    height: 100%;
    min-width: 245px;

    @media ${devices.redminote7} {
        text-align: center;
        min-width: 275px;
    }
    @media ${devices.redmi12proPlus5g} {
        text-align: center;
        min-width: 275px;
    }
    & > span {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }

    @media ${devices.md} {
        min-width: 184px;
    }
    @media ${devices.m} {
        order: 1;
        align-items: center;
        text-align: center;
        padding: 40px 0;
    }
`
export const InfoTitle = styled.div`
    color: ${({theme}) => theme.colors.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
`
export const FooterSocialWrapper = styled(SocialWrapper)`
    flex-direction: row;
`

export const Logo = styled(NavLink)`
    background-image: url(${IconLogoBig});
    background-size: cover;
    height: 120px;
    width: 120px;
    display: flex;
    background-position: center;
    @media ${devices.md} {
        width: 100px;
        height: 100px;
    }
    @media ${devices.m} {
        order: 3;
        margin: 24px auto;
    }
    @media ${devices.xs} {
        align-self: center;
    }
`
export const ContactsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 245px;
    @media ${devices.md} {
        order: 2;
        align-items: center;
        text-align: center;
        min-width: 184px;
    }
`
export const ContactsDetails = styled.div`
    color: ${({theme}) => theme.colors.textSecondary};
    /* Caption */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`
export const Address = styled.div`
    & > a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.textSecondary};
    }
`
export const Phone = styled.div`
    & > a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.textSecondary};
    }
`
export const Mail = styled.div`
    & > a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.textSecondary};
    }
`
export const MapLinks = styled(LinkWrapper)`
    padding-top: 0;

    & > a {
        font-size: 16px;
    }
`
export const GoogleMapsLink = styled(LinkDirectionGoogle)`
    color: ${({theme}) => theme.colors.textSecondary};
    &:before {
        width: 24px;
        height: 24px;
        background-color: ${({theme}) => theme.colors.white};
        border-radius: 3px;
        text-align: center;
        margin-right: 4px;
    }
`
export const WazeLink = styled(LinkDirectionWaze)`
    color: ${({theme}) => theme.colors.textSecondary};
    &:before {
        width: 24px;
        height: 24px;
    }
`
export const CopyrightWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const CopyrightText = styled.span`
    color: ${({theme}) => theme.colors.textSecondary};
    /* Caption */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding-top: 36px;
    padding-bottom: 100px;

    & a {
        color: ${({ theme }) => theme.colors.textSecondary};
    }
`
