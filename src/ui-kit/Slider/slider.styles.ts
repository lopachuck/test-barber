import styled from "styled-components";
import {devices} from "../../devices";
import ArrowLeft from '../../assets/icon/arrow_left.svg'
import ArrowRight from '../../assets/icon/arrow_right.svg'

export const SliderWrapper = styled.div`
    & .slick-slider{
        //max-width: 1160px;
    }
    & .slick-dots li button:before{
        color: ${({theme}) => theme.colors.elementsGrey}
    }
    & .slick-dots li.slick-active button:before{
        color: ${({theme}) => theme.colors.white};
    }
    
    & .slick-prev{
        top: -120px;
        left: unset;
        right: 223px;
    }
    
    & .slick-next{
        top: -120px;
        right: 163px;
    }
    & .slick-list {
        //overflow: visible;
    }
    & .slick-initialized .slick-slide{
        width: 348px;
    }
    & .slick-track{
        display: flex;
        //gap: 16px;
        //overflow-y: hidden;
    }
    & .slick-prev:before{
        content: url(${ArrowLeft});
    }
    & .slick-next:before{
        content: url(${ArrowRight});
    }

    & .slick-prev:before, .slick-next:before{
        display: flex;
        width: 40px;
        height: 40px;
        border: 1px solid;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        &:hover{
            color: ${({theme}) => theme.colors.accentColor}
        }
    }
    @media ${devices.lg} {
        & .slick-arrow, slick-arrow:before{
            display: none!important;
        }
    }
`
export const GalleryPhoto = styled.picture`
    display: flex;
    //width: 23vw;
    margin: 0 8px;
    //padding: 0 8px;
    & > img {
        width: 100%;
    }
    @media ${devices.md} {
        //width: 49vw;
    }
    @media ${devices.sm} {
        margin: 0 auto;
        //width: 100vw;
    }
`


