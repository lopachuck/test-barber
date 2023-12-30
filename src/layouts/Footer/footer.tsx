import { FC } from 'react'
import * as S from './footer.styles'
import {
    BARBERSHOP_FACEBOOK_LINK,
    BARBERSHOP_INSTAGRAM_LINK,
    BARBERSHOP_MAIL_ADDRESS,
    BARBERSHOP_PHONE,
} from '../../config/config'

const Footer: FC = () => {
    return (
        <>
            <S.FooterWrapper>
                <S.InfoWrapper>
                    <S.SocialWrapper>
                        <S.InfoTitle>Stay Up to Date</S.InfoTitle>
                        <span>Subcscribe to our social media</span>
                        <S.SocialIconWrapper>
                            <S.SocialIcon to={BARBERSHOP_INSTAGRAM_LINK} target={'_blank'} rel="noopener noreferrer">
                                <img src={'/svg/icons/instagram.svg'} alt={'instagram'} />
                            </S.SocialIcon>
                            <S.SocialIcon to={BARBERSHOP_FACEBOOK_LINK} target={'_blank'} rel="noopener noreferrer">
                                <img src={'/svg/icons/facebook.svg'} alt={'facebook'} />
                            </S.SocialIcon>
                        </S.SocialIconWrapper>
                    </S.SocialWrapper>
                    <S.Logo src={'/svg/icons/logo_big.svg'} />
                    <S.ContactsWrapper>
                        <S.InfoTitle>Contacts</S.InfoTitle>
                        <S.ContactsDetails>
                            <S.Address>
                                <a href={'https://waze.com/ul/hud9d5sh68'} target={'_blank'} rel="noopener noreferrer">
                                    Fr.R.Kreutzwaldi 7, 10126 Tallinn</a>
                            </S.Address>
                            <S.Phone>
                                <a href={`tel:${BARBERSHOP_PHONE}`}>${BARBERSHOP_PHONE}</a>
                            </S.Phone>
                            <S.Mail>
                                <a href={`mailto:${BARBERSHOP_MAIL_ADDRESS}`}>${BARBERSHOP_MAIL_ADDRESS}</a>
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
