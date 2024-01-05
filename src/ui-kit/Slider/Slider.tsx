import {FC} from "react";
import * as S from './slider.styles'
import Slider from "react-slick";
import {GalleryPhoto} from "./slider.styles";

const CustomSlider: FC = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <S.SliderWrapper>
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
            </S.SliderWrapper>
        </>
    )
}

export default CustomSlider