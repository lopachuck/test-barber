import React, { FC } from 'react'
import * as S from './aboutUs.styles'
import { BARBERSHOP_MAIL_ADDRESS } from '../../config/config'
import { useTranslation } from 'react-i18next'

const AboutUs: FC = () => {
    const { t, i18n } = useTranslation()
    return (
        <>
            <S.AboutUs>
                <S.AboutUsWrapper>
                    <div>
                        <h2>{t('home_aboutUs_title')}</h2>
                        <p>{t('home_aboutUs_text')}</p>
                        <S.AboutLink to={'/barbers'}>{t('home_aboutUs_meet_link')}</S.AboutLink>
                    </div>
                    <picture>
                        <source media="(max-width: 480px)"
                                srcSet={'/img/home/about_us/about_us_70_1120_1000.webp 320w'}
                                type={'image/webp'} />
                        <source media="(max-width: 768px)"
                                srcSet={'/img/home/about_us/about_us_70_1120_1000.webp 768w'}
                                type={'image/webp'} />
                        <source media="(max-width: 960px)"
                                srcSet={'/img/home/about_us/about_us_70_1120_1000.webp 960w'}
                                type={'image/webp'} />
                        <source
                            srcSet={'/img/home/about_us/about_us_70_1120_1000.webp 1280w'}
                            type={'image/webp'} />
                        <source
                            srcSet={'/img/home/about_us/about_us_70_2240_2000.webp 1280w'}
                            type={'image/webp'} />
                        <img src="/img/home/about_us/about_us.jpg" alt="about us" />
                    </picture>
                </S.AboutUsWrapper>
                <S.HiringBlock>
                    {t('home_aboutUs_CV')}&nbsp;
                    <span></span>
                    <S.AboutLink
                        to={`mailto:${BARBERSHOP_MAIL_ADDRESS}`}>{BARBERSHOP_MAIL_ADDRESS}</S.AboutLink>
                </S.HiringBlock>
            </S.AboutUs>
        </>
    )
}
export default AboutUs