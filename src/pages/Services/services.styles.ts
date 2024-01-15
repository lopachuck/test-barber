import styled from 'styled-components'
import { devices } from '../../devices'

export const Services = styled.article`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 8px;
`

export const Service = styled.section`
    display: flex;
    width: 100%;
    padding: 1.25rem;
    justify-content: space-between;
    align-items: center;

    border-radius: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.elementsGrey};
    background: ${({ theme }) => theme.colors.backgroundElemetsBlack};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    @media ${devices.md} {
        min-height: 192px;
    }
    @media ${devices.sm} {
        align-items: unset;
        flex-direction: column;
        min-height: 180px;
        padding: 16px;
        gap: 16px;
    }
`
export const ServiceInfo = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`
export const Pictures = styled.picture`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid ${({theme}) => theme.colors.elementsGrey};
    overflow: hidden;

    & > img {
        max-width: 100%;
        object-fit: contain;
    }

    @media ${devices.sm} {
        display: none;
    }

`
export const DescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: ${({ theme }) => theme.colors.white};
    max-width: 585px;
`
export const ServiceTitle = styled.div`
    color: ${({ theme }) => theme.colors.white};;
    &:first-letter{
        text-transform: capitalize;
    }
    /* Headline2 */
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 100% */
    letter-spacing: -0.64px;
    @media ${devices.sm} {
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.252px;
    }
`
export const Description = styled.div`
    color: ${({ theme }) => theme.colors.textSecondary};

    /* Caption */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    @media ${devices.sm} {
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 123.077% */
    }
`
export const BtnBlock = styled.div`
    display: flex;
    gap: 80px;
    height: 100%;
    align-items: center;
    @media ${devices.md} {
        flex-direction: column;
        gap: 24px;
    }
    @media ${devices.sm} {
        flex-direction: unset;
        justify-content: space-between;
        width: 100%;
    }

`
export const PriceBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 86px;
    gap: 16px;
    color: ${({ theme }) => theme.colors.white};
    @media ${devices.md} {
        order: 2
    }
    @media ${devices.xs} {
        order: unset;
        align-items: flex-start;
        gap: 4px;
    }

`
export const Price = styled.div`
    color: ${({ theme }) => theme.colors.white};

    /* Headline2 */
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 100% */
    letter-spacing: -0.64px;
    @media ${devices.xs} {
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.252px;
    }
`

export const Duration = styled.div`
    color: ${({ theme }) => theme.colors.textSecondary};

    /* Caption */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    @media ${devices.xs} {
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
    }
`


