import React, { FC, useEffect } from 'react'
import { IAppProps } from '../../App'
import { useTranslation } from 'react-i18next'
import { BgImage, PageWrapper } from '../Page/page.styles'
import * as S from './home.styles'
import { BARBERSHOP_FACEBOOK_LINK, BARBERSHOP_INSTAGRAM_LINK } from '../../config/config'
import Metrics from '../../components/Metrics/Metrics'
import AboutUs from '../../components/AboutUs/AboutUs'
import Localization from '../../components/Localization/Localization'
import GalleryHome from '../../components/GalleryHome/GalleryHome'
import LogoLine from "../../components/LogoLine/LogoLine";

const Home: FC<IAppProps> = (props) => {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        props.setTitle(t('home'))
    }, [])
    return (
        <>
            <BgImage>
                <S.HomePageWrapper>
                    <S.SocialWrapper>
                        <S.SocialLinkInstagram to={BARBERSHOP_INSTAGRAM_LINK} />
                        <S.SocialLinkFacebook to={BARBERSHOP_FACEBOOK_LINK} />
                    </S.SocialWrapper>
                    <S.HomeTitleWrapper>
                        <S.HomeTitle>{t('title_page_home')}</S.HomeTitle>
                        <S.HomeSubtitle>{t('home_subtitle')}</S.HomeSubtitle>
                    </S.HomeTitleWrapper>
                </S.HomePageWrapper>
                {/*<S.LogoLine />*/}
                <LogoLine />
            </BgImage>
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
