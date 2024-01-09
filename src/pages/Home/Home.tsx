import React, { FC, useEffect } from 'react'
import { IAppProps } from '../../App'
import { useTranslation } from 'react-i18next'
import { PageWrapper } from '../Page/page.styles'
import * as S from './home.styles'
import { BARBERSHOP_MAIL_ADDRESS } from '../../config/config'

const Home: FC<IAppProps> = (props) => {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        props.setTitle(t('home'))
    }, [])
    return (
        <>
            <PageWrapper>
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
                            <h2>ABOUT US</h2>
                            <p>
                                At Uncle Ve, we believe that a barbershop isn't just about cutting hair and shaving
                                beards. We provide professional service, the best specialists, stylish salon decor, and
                                a unique atmosphere! Just trust us once to stay forever.
                            </p>
                            <S.AboutLink to=""></S.AboutLink>
                            <a href="/barbers">MEET OUR TEAM</a>
                        </div>
                        <picture>
                            {/*<source*/}
                            {/*    srcSet={'/img/services/hair-cut.webp, /img/services/hair-cut.jpeg 2x'}*/}
                            {/*    type={'image/webp'} />*/}
                            <img src="/img/home/about_us.jpg" alt="about us" />
                        </picture>
                    </S.AboutUsWrapper>
                    <S.HiringBlock>
                        We always looking for new talents! Send us your CV - <S.AboutLink
                        to={`mailto:${BARBERSHOP_MAIL_ADDRESS}`}>{BARBERSHOP_MAIL_ADDRESS}</S.AboutLink>
                    </S.HiringBlock>
                </S.AboutUs>
                <S.Metrics>
                    <S.Column>
                        <S.Row>
                            10 +
                        </S.Row>
                        <S.Row>
                            Year of professional experience
                        </S.Row>
                    </S.Column>
                    <S.Column>
                        <S.Row>
                            500
                        </S.Row>
                        <S.Row>
                            Clients trust us monthly
                        </S.Row>
                    </S.Column>
                    <S.Column>
                        <S.Row>
                            89%
                        </S.Row>
                        <S.Row>
                            Recommend us to their friends
                        </S.Row>
                    </S.Column>
                </S.Metrics>

            </PageWrapper>
        </>
    )
}

export default Home
