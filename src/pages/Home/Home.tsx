import React, { FC, useEffect } from 'react'
import { IAppProps } from '../../App'
import { useTranslation } from 'react-i18next'
import { PageWrapper } from '../Page/page.styles'
import * as S from './home.styles'
import {
    BARBERSHOP_DIRECTION_LINK,
    BARBERSHOP_FACEBOOK_LINK,
    BARBERSHOP_INSTAGRAM_LINK,
    BARBERSHOP_MAIL_ADDRESS,
} from '../../config/config'
import CustomGoogleMap from '../../components/GoogleMap/CustomGoogleMap'

const Home: FC<IAppProps> = (props) => {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        props.setTitle(t('home'))
    }, [])
    return (
        <>
            <PageWrapper>
                <S.SocialWrapper>
                    <S.SocialLinkInstagram to={BARBERSHOP_INSTAGRAM_LINK} />
                    <S.SocialLinkFacebook to={BARBERSHOP_FACEBOOK_LINK} />
                </S.SocialWrapper>
                <S.HomeTitleWrapper>
                    <S.HomeTitle>{t('title_page_home')}</S.HomeTitle>
                    <S.HomeSubtitle>{t('home_subtitle')}</S.HomeSubtitle>
                </S.HomeTitleWrapper>
            </PageWrapper>
            <S.LogoLineWrap>
                <S.LogoLine />
            </S.LogoLineWrap>
            {/*<S.LogoLine2 />*/}
            <PageWrapper>
                <S.AboutUs>
                    <S.AboutUsWrapper>
                        <div>
                            <h2>{t('home_aboutUs_title')}</h2>
                            <p>{t('home_aboutUs_text')}</p>
                            <S.AboutLink to=""></S.AboutLink>
                            <a href="/barbers">{t('home_aboutUs_meet_link')}</a>
                        </div>
                        <picture>
                            {/*<source*/}
                            {/*    srcSet={'/img/services/hair-cut.webp, /img/services/hair-cut.jpeg 2x'}*/}
                            {/*    type={'image/webp'} />*/}
                            <img src="/img/home/about_us.jpg" alt="about us" />
                        </picture>
                    </S.AboutUsWrapper>
                    <S.HiringBlock>
                        {t('home_aboutUs_CV')} - <S.AboutLink
                        to={`mailto:${BARBERSHOP_MAIL_ADDRESS}`}>{BARBERSHOP_MAIL_ADDRESS}</S.AboutLink>
                    </S.HiringBlock>
                </S.AboutUs>
                <S.Metrics>
                    <S.Column>
                        <S.Row>
                            10 +
                        </S.Row>
                        <S.Row>
                            {t('home_exp_year')}
                        </S.Row>
                    </S.Column>
                    <S.Column>
                        <S.Row>
                            500
                        </S.Row>
                        <S.Row>
                            {t('home_client_mountly')}
                        </S.Row>
                    </S.Column>
                    <S.Column>
                        <S.Row>
                            89%
                        </S.Row>
                        <S.Row>
                            {t('home_recomend')}
                        </S.Row>
                    </S.Column>
                </S.Metrics>

            </PageWrapper>
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
            <S.Localization>
                <div>
                    <div>
                        <S.LocalizationTitle>{t('home_localization')}</S.LocalizationTitle>
                        <S.Address to={BARBERSHOP_DIRECTION_LINK} target={'_blank'}>
                            <img src={'/svg/icons/location.svg'} alt="loc" />
                            <span>{t('contacts_address')}</span>
                        </S.Address>
                    </div>
                    <S.LocalizationWorkTime>
                        <img src={'/svg/icons/time.svg'} alt="loc" />
                        <div>
                            <span>{t('contacts_mon_fri')} 10:00 - 20:00 </span>
                            <p>{t('contacts_sat')} 10:00 - 19:00, </p>
                            <p>{t('contacts_sun')} 10:00 - 16:00</p>
                        </div>
                    </S.LocalizationWorkTime>
                </div>
                <CustomGoogleMap />
            </S.Localization>
        </>
    )
}

export default Home
