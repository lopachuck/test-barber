import { FC, useState } from 'react'
import * as S from './footer.styles'
import {
    BARBERSHOP_DIRECTION_LINK,
    BARBERSHOP_FACEBOOK_LINK,
    BARBERSHOP_INSTAGRAM_LINK,
    BARBERSHOP_MAIL_ADDRESS,
    BARBERSHOP_PHONE
} from "../../config/config";
import {t} from "../../utils/translate/t";

const Footer: FC = () => {
    return (
        <>
            <S.FooterWrapper>
                <S.InfoWrapper>
                    <S.SocialWrapper>
                        <S.InfoTitle>{t('contacts_stay_up')}</S.InfoTitle>
                        <span>{t('contacts_subscribe')}</span>
                        <S.SocialIconWrapper>
                            <S.SocialIcon to={BARBERSHOP_INSTAGRAM_LINK} target={'_blank'}>
                                <img src={'/svg/icons/instagram.svg'} alt={'insta'}/>
                            </S.SocialIcon>
                            <S.SocialIcon to={BARBERSHOP_FACEBOOK_LINK} target={'_blank'}>
                                <img src={'/svg/icons/facebook.svg'} alt={'insta'}/>
                            </S.SocialIcon>
                        </S.SocialIconWrapper>
                    </S.SocialWrapper>
                    <S.Logo src={'/svg/icons/logo_big.svg'}/>
                    <S.ContactsWrapper>
                        <S.InfoTitle>{t('header_menu_contacts')}</S.InfoTitle>
                        <S.ContactsDetails>
                            <S.Address>
                                <a href={BARBERSHOP_DIRECTION_LINK} target={'_blank'}>{t('contacts_address')}</a>
                            </S.Address>
                            <S.Phone>
                                <a href={`tel:${BARBERSHOP_PHONE}`}>{BARBERSHOP_PHONE}</a>
                            </S.Phone>
                            <S.Mail>
                                <a href={`mailto:${BARBERSHOP_MAIL_ADDRESS}`}>{BARBERSHOP_MAIL_ADDRESS}</a>
                            </S.Mail>
                        </S.ContactsDetails>
                    </S.ContactsWrapper>
                </S.InfoWrapper>
                <S.CopyrightWrapper>
                    <S.CopyrightText>2024 © {t('contacts_brand_name')}</S.CopyrightText>
                </S.CopyrightWrapper>
            </S.FooterWrapper>
        </>
    )
}

export default Footer
