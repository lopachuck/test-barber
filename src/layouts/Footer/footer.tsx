import React, { FC } from 'react'
import * as S from './footer.styles'
import {
    ACHIFY_URL,
    BARBERSHOP_DIRECTION_LINK_GOOGLE,
    BARBERSHOP_DIRECTION_LINK_WAZE,
    BARBERSHOP_FACEBOOK_LINK,
    BARBERSHOP_INSTAGRAM_LINK,
    BARBERSHOP_MAIL_ADDRESS,
    BARBERSHOP_PHONE,
} from '../../config/config'
import { useTranslation } from 'react-i18next'
import { SocialLinkFacebook, SocialLinkInstagram } from '../../pages/Home/home.styles'

const Footer: FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <S.FooterWrapper>
                <S.InfoWrapper>
                    <S.FooterColumn>
                        <S.InfoTitle>{t('contacts_stay_up')}</S.InfoTitle>
                        <span>{t('contacts_subscribe')}</span>
                        <S.FooterSocialWrapper>
                            <SocialLinkInstagram to={BARBERSHOP_INSTAGRAM_LINK} />
                            <SocialLinkFacebook to={BARBERSHOP_FACEBOOK_LINK} />
                        </S.FooterSocialWrapper>
                    </S.FooterColumn>
                    <S.Logo to={'/'} />
                    <S.ContactsWrapper>
                        <S.InfoTitle>{t('header_menu_contacts')}</S.InfoTitle>
                        <S.ContactsDetails>
                            <S.Address>
                                <p>{t('contacts_address')}</p>
                            </S.Address>
                            <S.Phone>
                                <a href={`tel:${BARBERSHOP_PHONE}`}>{BARBERSHOP_PHONE}</a>
                            </S.Phone>
                            <S.Mail>
                                <a href={`mailto:${BARBERSHOP_MAIL_ADDRESS}`}>{BARBERSHOP_MAIL_ADDRESS}</a>
                            </S.Mail>
                        </S.ContactsDetails>
                        <S.MapLinks>
                            <S.GoogleMapsLink
                                to={BARBERSHOP_DIRECTION_LINK_GOOGLE}>Google Maps</S.GoogleMapsLink>
                            <S.WazeLink
                                to={BARBERSHOP_DIRECTION_LINK_WAZE}>Waze</S.WazeLink>
                        </S.MapLinks>
                    </S.ContactsWrapper>
                </S.InfoWrapper>
                <S.CopyrightWrapper>
                    <S.CopyrightText>2024&nbsp;©&nbsp;{t('contacts_brand_name')}&nbsp;powered&nbsp;by&nbsp;
                        <a href={ACHIFY_URL}
                           target="_blank">ACHIFY&nbsp;OÜ</a></S.CopyrightText>
                </S.CopyrightWrapper>
            </S.FooterWrapper>
        </>
    )
}

export default Footer
