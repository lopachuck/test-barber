import styled from 'styled-components'
import { devices } from '../../devices'

export const Metrics = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    padding-top: 39px;
    padding-bottom: 39px;
    border-top: 1px solid ${({ theme }) => theme.colors.elementsGrey};
    border-bottom: 1px solid ${({ theme }) => theme.colors.elementsGrey};
    @media ${devices.md} {
        padding-top: 28px;
        padding-bottom: 28px;
        justify-content: space-between;
    }
    @media ${devices.xs} {
        max-height: 140px;
        width: 100%;
    }
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 80px;

    & :first-child {
        color: ${({ theme }) => theme.colors.accentColor};
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px; /* 120% */
        letter-spacing: -0.8px;
        @media ${devices.xs} {
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px; /* 133.333% */
            letter-spacing: -0.252px;
        }
    }

    & :last-child {
        color: ${({ theme }) => theme.colors.white};
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.252px;
        @media ${devices.xs} {
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
        }
    }

    @media ${devices.md} {
        width: 200px;
        height: 112px;
    }
    @media ${devices.xs} {
        width: 100px;
        height: unset;
    }
`