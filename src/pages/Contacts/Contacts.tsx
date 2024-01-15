import React, {FC, useEffect} from 'react'
import * as S from './contacts.styles'
import CustomGoogleMap from '../../components/GoogleMap/CustomGoogleMap'
import {IAppProps} from '../../App'
import {
    BARBERSHOP_FACEBOOK_LINK,
    BARBERSHOP_INSTAGRAM_LINK,
    BARBERSHOP_MAIL_ADDRESS,
    BARBERSHOP_PHONE,
} from '../../config/config'
import {useTranslation} from 'react-i18next'
import {CenteredTitle, PageWrapper} from '../Page/page.styles'
import {SocialLinkFacebook, SocialLinkInstagram, SocialWrapper} from '../Home/home.styles'
import {ContactsMailLink} from "./contacts.styles";

const Contacts: FC<IAppProps> = (props) => {
    const {t, i18n} = useTranslation()
    useEffect(() => {
        props.setTitle(t('title_page_contacts'))
    }, [])
    console.log(BARBERSHOP_MAIL_ADDRESS)
    return (
        <>
            <PageWrapper>
                <CenteredTitle>{t('title_page_contacts')}</CenteredTitle>
                <S.ContactInfoWrapper>
                    <S.ContactInfo>
                    <span>
                        <span>{t('contacts_address')}</span>
                    </span>
                        <S.WorkTime>
                            <div>
                            <span>{t('contacts_mon_fri')}&nbsp;
                                <time>10:00</time> - <time>20:00</time> </span>
                                <p>{t('contacts_sat')}&nbsp;
                                    <time>10:00</time>
                                    - <time>19:00</time>, {t('contacts_sun')}&nbsp;
                                    <time>10:00</time>
                                    - <time>16:00</time></p>
                            </div>
                        </S.WorkTime>
                        <S.ContactsPhoneLink to={`tel:${BARBERSHOP_PHONE}`}>
                            {BARBERSHOP_PHONE}
                        </S.ContactsPhoneLink>
                        <S.ContactsMailLink to={`mailto:${BARBERSHOP_MAIL_ADDRESS}`}>
                            {BARBERSHOP_MAIL_ADDRESS}
                        </S.ContactsMailLink>
                    </S.ContactInfo>
                    <S.ContactsSocialWrapper>
                        <span>{t('contacts_subscribe')}</span>
                        <SocialWrapper>
                            <SocialLinkInstagram to={BARBERSHOP_INSTAGRAM_LINK}/>
                            <SocialLinkFacebook to={BARBERSHOP_FACEBOOK_LINK}/>
                        </SocialWrapper>
                    </S.ContactsSocialWrapper>
                </S.ContactInfoWrapper>
                <S.MapWrapper>
                    <CustomGoogleMap/>
                </S.MapWrapper>
            </PageWrapper>
        </>
    );
};

export default Contacts;
