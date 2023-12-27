import { FC, useState } from 'react'
import * as S from './footer.styles'

const Footer: FC = () => {
    return (
        <>
            <S.FooterWrapper>
                <S.InfoWrapper>
                    <S.SocialWrapper>
                        <S.InfoTitle>Stay Up to Date</S.InfoTitle>
                        <span>Subcscribe to our social media</span>
                        <S.SocialIconWrapper>
                            <S.SocialIcon to={'https://instagram.com'} target={'_blank'}>
                                <img src={'/svg/icons/instagram.svg'} alt={'insta'}/>
                            </S.SocialIcon>
                            <S.SocialIcon to={'https://facebook.com'} target={'_blank'}>
                                <img src={'/svg/icons/facebook.svg'} alt={'insta'}/>
                            </S.SocialIcon>
                        </S.SocialIconWrapper>
                    </S.SocialWrapper>
                    <S.Logo src={'/svg/icons/logo_big.svg'}/>
                    <S.ContactsWrapper>
                        <S.InfoTitle>Contacts</S.InfoTitle>
                        <S.ContactsDetails>
                            <S.Address>
                                <a href={"https://waze.com/ul/hud9d5sh68"} target={'_blank'}>Fr.R.Kreutzwaldi 7, 10126 Tallinn</a>
                            </S.Address>
                            <S.Phone>
                                <a href={'tel:+37258365820'}>+37258365820</a>
                            </S.Phone>
                            <S.Mail>
                                <a href={'mailto:unclevebarbershop@gmail.com'}>unclevebarbershop@gmail.com</a>
                            </S.Mail>
                        </S.ContactsDetails>
                    </S.ContactsWrapper>
                </S.InfoWrapper>
                <S.CopyrightWrapper>
                    <S.CopyrightText>2024 © Uncle Ve</S.CopyrightText>
                </S.CopyrightWrapper>
            </S.FooterWrapper>
        </>
    )
}

export default Footer
