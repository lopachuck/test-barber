import React, { FC } from 'react'
import * as S from './galleryHome.styles'
import { useTranslation } from 'react-i18next'

const GalleryHome: FC = () => {
    const { t, i18n } = useTranslation()
    return (
        <>
            <S.Gallery>
                <S.GalleryTitle>{t('header_menu_gallery')}</S.GalleryTitle>
                <S.GallerySubtitle>
                    {t('home_gallery_subtitle')}
                    <S.GalleryLink to={'gallery'}>{t('header_menu_gallery')}</S.GalleryLink>
                </S.GallerySubtitle>
                <S.ImagesContainer>
                    <S.ImagesColumn>
                        <S.GalleryImageBig>
                            <source media="(max-width: 480px)"
                                    srcSet={'/img/home/gallery/100webp/Main-Gallery1_100_144.webp 320w'}
                                    type={'image/webp'}/>
                            <source media="(max-width: 768px)"
                                    srcSet={'/img/home/gallery/200webp/Main-Gallery1_200_288.webp 768w'}
                                    type={'image/webp'}/>
                            <source media="(max-width: 960px)"
                                    srcSet={'/img/home/gallery/360webp/Main-Gallery1_360_516.webp 960w'}
                                    type={'image/webp'}/>
                            <source
                                srcSet={'/img/home/gallery/360webp/Main-Gallery1_360_516.webp 1280w'}
                                type={'image/webp'}/>
                            <img src="/img/home/gallery/360jpeg/Main-Gallery1_360_516.jpeg"
                                 loading={'lazy'}
                                 alt={t('services_mens_haircut')}/>
                        </S.GalleryImageBig>
                        <S.GalleryImageSmall>
                            <source media="(max-width: 480px)"
                                    srcSet={'/img/home/gallery/100webp/Main-Gallery2_100_82.webp 320w'}
                                    type={'image/webp'}/>
                            <source media="(max-width: 768px)"
                                    srcSet={'/img/home/gallery/200webp/Main-Gallery2_200_184.webp 768w'}
                                    type={'image/webp'}/>
                            <source media="(max-width: 960px)"
                                    srcSet={'/img/home/gallery/360webp/Main-Gallery2_360_296.webp 960w'}
                                    type={'image/webp'}/>
                            <source
                                srcSet={'/img/home/gallery/360webp/Main-Gallery2_360_296.webp 1280w'}
                                type={'image/webp'}/>
                            <img src="/img/home/gallery/360jpeg/Main-Gallery2_360_296.jpeg"
                                 loading={'lazy'}
                                 alt={t('services_mens_haircut')}/>
                        </S.GalleryImageSmall>
                    </S.ImagesColumn>
                    <S.ImagesColumn>
                        <S.GalleryImageSmall>
                            <source media="(max-width: 480px)"
                                    srcSet={'/img/home/gallery/100webp/Main-Gallery3_100_82.webp 320w'}
                                    type={'image/webp'}/>
                            <source media="(max-width: 768px)"
                                    srcSet={'/img/home/gallery/200webp/Main-Gallery3_200_184.webp 768w'}
                                    type={'image/webp'}/>
                            <source media="(max-width: 960px)"
                                    srcSet={'/img/home/gallery/360webp/Main-Gallery3_360_296.webp 960w'}
                                    type={'image/webp'}/>
                            <source
                                srcSet={'/img/home/gallery/360webp/Main-Gallery3_360_296.webp 1280w'}
                                type={'image/webp'}/>
                            <img src="/img/home/gallery/360jpeg/Main-Gallery3_360_296.jpeg"
                                 loading={'lazy'}
                                 alt={t('services_mens_haircut')}/>
                        </S.GalleryImageSmall>
                        <S.GalleryImageBig>
                            <source media="(max-width: 480px)"
                                    srcSet={'/img/home/gallery/100webp/Main-Gallery4_100_144.webp 320w'}
                                    type={'image/webp'}/>
                            <source media="(max-width: 768px)"
                                    srcSet={'/img/home/gallery/200webp/Main-Gallery4_200_288.webp 768w'}
                                    type={'image/webp'}/>
                            <source media="(max-width: 960px)"
                                    srcSet={'/img/home/gallery/360webp/Main-Gallery4_360_516.webp 960w'}
                                    type={'image/webp'}/>
                            <source
                                srcSet={'/img/home/gallery/360webp/Main-Gallery4_360_516.webp 1280w'}
                                type={'image/webp'}/>
                            <img src="/img/home/gallery/360jpeg/Main-Gallery4_360_516.jpeg"
                                 loading={'lazy'}
                                 alt={t('services_mens_haircut')}/>
                        </S.GalleryImageBig>
                    </S.ImagesColumn>
                    <S.ImagesColumn>
                        <S.GalleryImageBig>
                            <source media="(max-width: 480px)"
                                    srcSet={'/img/home/gallery/100webp/Main-Gallery5_100_144.webp 320w'}
                                    type={'image/webp'}/>
                            <source media="(max-width: 768px)"
                                    srcSet={'/img/home/gallery/200webp/Main-Gallery5_200_288.webp 768w'}
                                    type={'image/webp'}/>
                            <source media="(max-width: 960px)"
                                    srcSet={'/img/home/gallery/360webp/Main-Gallery5_360_516.webp 960w'}
                                    type={'image/webp'}/>
                            <source
                                srcSet={'/img/home/gallery/360webp/Main-Gallery5_360_516.webp 1280w'}
                                type={'image/webp'}/>
                            <img src="/img/home/gallery/360jpeg/Main-Gallery5_360_516.jpeg"
                                 loading={'lazy'}
                                 alt={t('services_mens_haircut')}/>
                        </S.GalleryImageBig>
                        <S.GalleryImageSmall>
                            <source media="(max-width: 480px)"
                                    srcSet={'/img/home/gallery/100webp/Main-Gallery6_100_82.webp 320w'}
                                    type={'image/webp'}/>
                            <source media="(max-width: 768px)"
                                    srcSet={'/img/home/gallery/200webp/Main-Gallery6_200_184.webp 768w'}
                                    type={'image/webp'}/>
                            <source media="(max-width: 960px)"
                                    srcSet={'/img/home/gallery/360webp/Main-Gallery6_360_296.webp 960w'}
                                    type={'image/webp'}/>
                            <source
                                srcSet={'/img/home/gallery/360webp/Main-Gallery6_360_296.webp 1280w'}
                                type={'image/webp'}/>
                            <img src="/img/home/gallery/360jpeg/Main-Gallery6_360_296.jpeg"
                                 loading={'lazy'}
                                 alt={t('services_mens_haircut')}/>
                        </S.GalleryImageSmall>
                    </S.ImagesColumn>
                </S.ImagesContainer>
            </S.Gallery>
        </>
    )
}
export default GalleryHome