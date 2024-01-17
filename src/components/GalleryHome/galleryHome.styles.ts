import styled from 'styled-components'
import { PageWrapper } from '../../pages/Page/page.styles'
import { NavLink } from 'react-router-dom'
import { devices } from '../../devices'


export const Gallery = styled(PageWrapper)`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 100px;

    & > * {
        text-align: center;
    }
`
export const GalleryTitle = styled.h2`
    width: 100%;
    text-transform: uppercase;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 120% */
    letter-spacing: -0.8px;
    padding-bottom: 28px;
`
export const GallerySubtitle = styled.h4`
    width: 100%;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding-bottom: 40px;
`
export const GalleryLink = styled(NavLink)`
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.accentColor};
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin-left: 4px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};
    transition: 0.6s linear;
    &:hover{
        color: ${({theme}) => theme.colors.white};
        border-bottom: 2px solid ${({ theme }) => theme.colors.white};
        
    }
`
export const ImagesContainer = styled.div`
    width: 100%;
    display: flex;
    max-width: 1160px;
    gap: 3.5%;
    padding-bottom: 100px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.elementsGrey};
`
export const ImagesColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 31%;
    gap: 40px;
    @media ${devices.md} {
        gap: 24px;
    }
    @media ${devices.xs} {
        gap: 16px;
    }
`
export const GalleryImageBig = styled.picture`
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 516px;
    width: 100%;
    overflow: hidden;
    @media ${devices.md} {
        max-height: none;
        width: auto;
    }
    @media ${devices.xs} {
        max-height: 144px;
    }

    & > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

`
export const GalleryImageSmall = styled(GalleryImageBig)`
    max-height: 296px;
    @media ${devices.md} {
        max-height: 184px;
    }
    @media ${devices.xs} {
        max-height: 82px;
    }

    & > img {
        height: unset;
        width: 100%;
    }
`
