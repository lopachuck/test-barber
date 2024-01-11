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
                            <img src="/img/home/main-gallery_1.jpeg"
                                 loading={'lazy'}
                                 alt={t('services_mens_haircut')} />
                        </S.GalleryImageBig>
                        <S.GalleryImageSmall>
                            <source
                                srcSet={'/img/home/main-gallery_2.webp, /img/home/main-gallery_2.jpeg 2x'}
                                type={'image/webp'} />
                            <img src="/img/home/main-gallery_2.jpeg"
                                 loading={'lazy'}
                                 alt={t('services_mens_haircut')} />
                        </S.GalleryImageSmall>
                    </S.ImagesColumn>
                    <S.ImagesColumn>
                        <S.GalleryImageSmall>
                            <source
                                srcSet={'/img/home/main-gallery_3.webp, /img/home/main-gallery_3.jpeg 2x'}
                                type={'image/webp'} />
                            <img src="/img/home/main-gallery_3.jpeg"
                                 loading={'lazy'}
                                 alt={t('services_mens_haircut')} />
                        </S.GalleryImageSmall>
                        <S.GalleryImageBig>
                            <source
                                srcSet={'/img/home/main-gallery_4.webp, /img/home/main-gallery_4.jpeg 2x'}
                                type={'image/webp'} />
                            <img src="/img/home/main-gallery_4.jpeg"
                                 loading={'lazy'}
                                 alt={t('services_mens_haircut')} />
                        </S.GalleryImageBig>
                    </S.ImagesColumn>
                    <S.ImagesColumn>
                        <S.GalleryImageBig>
                            <source
                                srcSet={'/img/home/main-gallery_5.webp, /img/home/main-gallery_5.jpeg 2x'}
                                type={'image/webp'} />
                            <img src="/img/home/main-gallery_5.jpeg"
                                 loading={'lazy'}
                                 alt={t('services_mens_haircut')} />
                        </S.GalleryImageBig>
                        <S.GalleryImageSmall>
                            <source
                                srcSet={'/img/home/main-gallery_6.webp, /img/home/main-gallery_6.jpeg 2x'}
                                type={'image/webp'} />
                            <img src="/img/home/main-gallery_6.jpeg"
                                 loading={'lazy'}
                                 alt={t('services_mens_haircut')} />
                        </S.GalleryImageSmall>
                    </S.ImagesColumn>
                </S.ImagesContainer>
            </S.Gallery>
        </>
    )
}
export default GalleryHome