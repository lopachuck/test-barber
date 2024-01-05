import { FC } from 'react'
import * as S from './slider.styles'
import { GalleryPhoto } from './slider.styles'
import Slider from 'react-slick'

const CustomSlider: FC = () => {
    // Base Formula: allSlides / current cnt to show: = result have to be whole number (integer)
    // @readme Ex: 12/4 + 12/3 * 12/2, at least 12 slides should be, or 24, 36, 48 etc
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4, // large count to show
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3, // middle count to show
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2, // small count to show
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1, // division by 1 = skip
                },
            },
        ],
    }
    return (
        <>
            <S.SliderWrapper>
                <Slider {...settings}>
                    <div>
                        <GalleryPhoto>
                            <source srcSet={'/img/gallery/1.webp, /img/gallery/1.jpg 2x'} type="image/webp" />
                            <img src={'/img/gallery/1.jpg'} loading={'lazy'} alt="" />
                        </GalleryPhoto>
                    </div>
                    <div>
                        <GalleryPhoto>
                            <source srcSet={'/img/gallery/2.webp, /img/gallery/2.jpg 2x'} type="image/webp" />
                            <img src={'/img/gallery/2.jpg'} loading={'lazy'} alt="" />
                        </GalleryPhoto>
                    </div>
                    <div>
                        <GalleryPhoto>
                            <source srcSet={'/img/gallery/3.webp, /img/gallery/3.jpg 2x'} type="image/webp" />
                            <img src={'/img/gallery/3.jpg'} loading={'lazy'} alt="" />
                        </GalleryPhoto>
                    </div>
                    <div>
                        <GalleryPhoto>
                            <source srcSet={'/img/gallery/4.webp, /img/gallery/4.jpg 2x'} type="image/webp" />
                            <img src={'/img/gallery/4.jpg'} loading={'lazy'} alt="" />
                        </GalleryPhoto>
                    </div>
                    <div>
                        <GalleryPhoto>
                            <source srcSet={'/img/gallery/1.webp, /img/gallery/1.jpg 2x'} type="image/webp" />
                            <img src={'/img/gallery/1.jpg'} loading={'lazy'} alt="" />
                        </GalleryPhoto>
                    </div>
                    <div>
                        <GalleryPhoto>
                            <source srcSet={'/img/gallery/2.webp, /img/gallery/2.jpg 2x'} type="image/webp" />
                            <img src={'/img/gallery/2.jpg'} loading={'lazy'} alt="" />
                        </GalleryPhoto>
                    </div>
                    <div>
                        <GalleryPhoto>
                            <source srcSet={'/img/gallery/3.webp, /img/gallery/3.jpg 2x'} type="image/webp" />
                            <img src={'/img/gallery/3.jpg'} loading={'lazy'} alt="" />
                        </GalleryPhoto>
                    </div>
                    <div>
                        <GalleryPhoto>
                            <source srcSet={'/img/gallery/4.webp, /img/gallery/4.jpg 2x'} type="image/webp" />
                            <img src={'/img/gallery/4.jpg'} loading={'lazy'} alt="" />
                        </GalleryPhoto>
                    </div>
                    <div>
                        <GalleryPhoto>
                            <source srcSet={'/img/gallery/1.webp, /img/gallery/1.jpg 2x'} type="image/webp" />
                            <img src={'/img/gallery/1.jpg'} loading={'lazy'} alt="" />
                        </GalleryPhoto>
                    </div>
                    <div>
                        <GalleryPhoto>
                            <source srcSet={'/img/gallery/2.webp, /img/gallery/2.jpg 2x'} type="image/webp" />
                            <img src={'/img/gallery/2.jpg'} loading={'lazy'} alt="" />
                        </GalleryPhoto>
                    </div>
                    <div>
                        <GalleryPhoto>
                            <source srcSet={'/img/gallery/3.webp, /img/gallery/3.jpg 2x'} type="image/webp" />
                            <img src={'/img/gallery/3.jpg'} loading={'lazy'} alt="" />
                        </GalleryPhoto>
                    </div>
                    <div>
                        <GalleryPhoto>
                            <source srcSet={'/img/gallery/4.webp, /img/gallery/4.jpg 2x'} type="image/webp" />
                            <img src={'/img/gallery/4.jpg'} loading={'lazy'} alt="" />
                        </GalleryPhoto>
                    </div>
                </Slider>
            </S.SliderWrapper>
        </>
    )
}

export default CustomSlider