import styled from 'styled-components'
import { devices } from '../../devices'
import ArrowLeft from '../../assets/icon/arrow_left.svg'
import ArrowRight from '../../assets/icon/arrow_right.svg'

export const SliderWrapper = styled.div`
    margin-top: 40px;
    margin-bottom: 52px;

    & .slick-dots li button:before {
        color: ${({ theme }) => theme.colors.elementsGrey}
    }

    & .slick-dots li.slick-active button:before {
        color: ${({ theme }) => theme.colors.white};
    }

    & .slick-arrow {
        top: -100px;
        width: 42px;
        height: 42px;
    }

    & .slick-prev {
        left: unset;
        right: 200px;
    }

    & .slick-next {
        right: 140px;
    }

    @media ${devices.lg} {
        & .slick-prev {
            right: 160px
        }

        & .slick-next {
            right: 100px;
        }
    }

    @media ${devices.md} {
        margin-bottom: 100px;
        & .slick-arrow {
            top: calc(100% + 80px)
        }

        & .slick-prev {
            right: 122px
        }

        & .slick-next {
            right: 60px;
        }
    }
    @media ${devices.sm} {
        & .slick-arrow {
            top: calc(100% + 50px)
        }

        & .slick-prev {
            right: 78px //16 + 42 + 20
        }

        & .slick-next {
            right: 16px;
        }
    }

    & .slick-initialized .slick-slide {
        width: 348px;
    }

    & .slick-track {
        display: flex;
    }

    & .slick-prev:before {
        content: url(${ArrowLeft});
    }

    & .slick-next:before {
        content: url(${ArrowRight});
    }

    & .slick-prev:before, .slick-next:before {
        display: flex;
        width: 40px;
        height: 40px;
        border: 1px solid;
        align-items: center;
        justify-content: center;
        border-radius: 8px;

        &:hover {
            color: ${({ theme }) => theme.colors.accentColor}
        }
    }
`
export const GalleryPhoto = styled.picture`
    display: flex;
    margin: 0 8px;
    & > img {
        width: 100%;
    }
    @media ${devices.sm} {
        margin: 0 auto;
    }
`


