import React, { FC, useEffect } from 'react'
import { IAppProps } from '../../App'
import { useTranslation } from 'react-i18next'
import { PageWrapper } from '../Page/page.styles'
import * as S from './home.styles'
import { BARBERSHOP_FACEBOOK_LINK, BARBERSHOP_INSTAGRAM_LINK } from '../../config/config'
import Metrics from '../../components/Metrics/Metrics'
import AboutUs from '../../components/AboutUs/AboutUs'
import Localization from '../../components/Localization/Localization'
import GalleryHome from '../../components/GalleryHome/GalleryHome'

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
                <AboutUs />
                <Metrics />
            </PageWrapper>
            <GalleryHome />
            <Localization />
            
        </>
    )
}

export default Home
