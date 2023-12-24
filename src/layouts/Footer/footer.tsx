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
                            <S.Address>Fr.R.Kreutzwaldi 7, 10126 Tallinn</S.Address>
                            <S.Phone>+37258365820</S.Phone>
                            <S.Mail>unclevebarbershop@gmail.com</S.Mail>
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
