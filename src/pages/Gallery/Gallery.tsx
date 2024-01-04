import {FC, useEffect} from "react";
import {IAppProps} from "../../App";
import * as S from "./gallery.styles";
import CustomSlider from "../../ui-kit/Slider/Slider";
import {useTranslation} from "react-i18next";

const Gallery: FC<IAppProps> = (props) => {
    const { t } = useTranslation()
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    useEffect(() => {
        props.setTitle(t('title_page_gallery'))
    }, []);
    return (
       <>
           <S.GalleryPage>
               <S.GalleryTitleWrapper>
                   <S.GalleryTitle>{t('title_page_gallery')}</S.GalleryTitle>
                   <S.GallerySubTitle>{t('gallery_subtitle')}</S.GallerySubTitle>
               </S.GalleryTitleWrapper>
               <S.GalleryWrapper>
               
               </S.GalleryWrapper>
           </S.GalleryPage>
           <CustomSlider/>
       </>
   )
}

export default Gallery