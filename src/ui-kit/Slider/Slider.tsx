import {FC, useEffect, useState} from "react";
import * as S from './slider.styles'
import Slider from "react-slick";
import {GalleryPhoto} from "./slider.styles";

const CustomSlider: FC = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            
            <Slider {...settings}>
                <div>
                    <GalleryPhoto>
                        <source srcSet={'/img/gallery/1.webp, /img/gallery/1.jpg 2x'} type="image/webp"/>
                        <img src={'/img/gallery/1.jpg'} loading={'lazy'} alt=""/>
                    </GalleryPhoto>
                </div>
                <div>
                    <GalleryPhoto>
                        <source srcSet={'/img/gallery/2.webp, /img/gallery/2.jpg 2x'} type="image/webp"/>
                        <img src={'/img/gallery/2.jpg'} loading={'lazy'} alt=""/>
                    </GalleryPhoto>
                </div>
                <div>
                    <GalleryPhoto>
                        <source srcSet={'/img/gallery/3.webp, /img/gallery/3.jpg 2x'} type="image/webp"/>
                        <img src={'/img/gallery/3.jpg'} loading={'lazy'} alt=""/>
                    </GalleryPhoto>
                </div>
                <div>
                    <GalleryPhoto>
                        <source srcSet={'/img/gallery/4.webp, /img/gallery/4.jpg 2x'} type="image/webp"/>
                        <img src={'/img/gallery/4.jpg'} loading={'lazy'} alt=""/>
                    </GalleryPhoto>
                </div>
                <div>
                    <GalleryPhoto>
                        <source srcSet={'/img/gallery/1.webp, /img/gallery/1.jpg 2x'} type="image/webp"/>
                        <img src={'/img/gallery/1.jpg'} loading={'lazy'} alt=""/>
                    </GalleryPhoto>
                </div>
                <div>
                    <GalleryPhoto>
                        <source srcSet={'/img/gallery/2.webp, /img/2.jpg 2x'} type="image/webp"/>
                        <img src={'/img/gallery/2.jpg'} loading={'lazy'} alt=""/>
                    </GalleryPhoto>
                </div>
                <div>
                    <GalleryPhoto>
                        <source srcSet={'/img/gallery/3.webp, /img/gallery/3.jpg 2x'} type="image/webp"/>
                        <img src={'/img/gallery/3.jpg'} loading={'lazy'} alt=""/>
                    </GalleryPhoto>
                </div>
                <div>
                    <GalleryPhoto>
                        <source srcSet={'/img/gallery/4.webp, /img/gallery/4.jpg 2x'} type="image/webp"/>
                        <img src={'/img/gallery/4.jpg'} loading={'lazy'} alt=""/>
                    </GalleryPhoto>
                </div>
            </Slider>
        </>
    )
}

export default CustomSlider