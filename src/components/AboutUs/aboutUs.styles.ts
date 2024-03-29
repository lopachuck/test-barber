import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { devices } from '../../devices'

export const AboutUs = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 96px;
    margin-bottom: 100px;

    & h2 {
        margin-bottom: 28px;
        color: ${({ theme }) => theme.colors.white};
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px; /* 120% */
        letter-spacing: -0.8px;
    }

    & div p {
        margin-bottom: 28px;
        color: ${({ theme }) => theme.colors.white};
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px; /* 144.444% */
        @media ${devices.md} {
            max-width: 75%;
        }
    }

    & a {
        color: ${({ theme }) => theme.colors.accentColor};

        text-decoration-line: underline;
        text-underline-offset: 2px;

        /* Actions-Navigation */
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 150% */
        text-transform: uppercase;
    }

    @media ${devices.md} {
        width: 100%;
        margin-top: 40px;
        margin-bottom: 40px;
    }
`

export const AboutUsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 140px;

    & > div {
        padding: 120px 0 120px 0;

        & > h2 {
            text-transform: uppercase;
        }
    }

    & picture img {
        max-width: 560px;
        max-height: 500px;
    }
    @media ${devices.lg} {
        gap: 100px;
    }
    @media ${devices.md} {
        flex-direction: column;
        gap: unset;
        & > picture {
            order: 1;

            & > img {
                width: 100%;
            }
        }

        & > div {
            order: 2;
            padding-top: 28px;
            padding-bottom: 56px;
        }

        & picture img {
            max-width: none;
            max-height: none;
        }
    }

    @media ${devices.sm} {
        & picture img {
            width: 100dvw;
            overflow: visible;
            margin-left: -17px;
        }
    }
`

export const AboutLink = styled(NavLink)`
    transition: 0.6s linear;
    &:hover{
        color: ${({theme}) => theme.colors.white};
    }
`

export const HiringBlock = styled.p`
    margin-top: 60px;
    text-align: right;
    white-space: nowrap;
    width: auto;

    color: ${({ theme }) => theme.colors.white};

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
    @media ${devices.md} {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-top: unset;
        text-align: left;
        white-space: unset;
        max-width: 30ch;
        & span {
            display: none;
        }

        & a {
            text-align: left;
        }

    }

    & span:before {
        content: "- ";
        display: inline;
        width: 10px;
        height: 10px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    }
`