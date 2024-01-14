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
                        <S.AboutLink to=""></S.AboutLink>
                        <a href="/barbers">{t('home_aboutUs_meet_link')}</a>
                    </div>
                    <picture>
                        <source media="(max-width: 480px)"
                                srcSet={'/img/home/about_us/team_70_360_320.webp 320w'}
                                type={'image/webp'} />
                        <source media="(max-width: 768px)"
                                srcSet={'/img/home/about_us/team_70_648_500.webp 768w'}
                                type={'image/webp'} />
                        <source media="(max-width: 960px)"
                                srcSet={'/img/home/about_us/team_70_560_500.webp 960w'}
                                type={'image/webp'} />
                        <source
                            srcSet={'/img/home/about_us/team_70_560_500.webp 1280w'}
                            type={'image/webp'} />
                        <img src="/img/home/about_us/team_70_648_500.jpeg" alt="about us" />
                    </picture>
                    {/*<picture>*/}
                    {/*    <source media="(max-width: 480px)"*/}
                    {/*            srcSet={'/img/home/about_us/team_70_360_320.webp 340w'}*/}
                    {/*            type={'image/webp'} />*/}
                    {/*    <source media="(max-width: 640px)"*/}
                    {/*            srcSet={'/img/home/about_us/team_70_560_0.webp 680w'}*/}
                    {/*            type={'image/webp'} />*/}
                    {/*    <source media="(max-width: 960px)"*/}
                    {/*            srcSet={'/img/home/about_us/team_70_680_0.webp 960w'}*/}
                    {/*            type={'image/webp'} />*/}
                    {/*    <source*/}
                    {/*        srcSet={'/img/home/about_us/team_70_1120_0.webp 1280w'}*/}
                    {/*        type={'image/webp'} />*/}
                    {/*    <img src="/img/home/about_us02/Team.jpeg" alt="about us" />*/}
                    {/*</picture>*/}
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