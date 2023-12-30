import {FC, useEffect} from 'react';
import * as S from "./contacts.styles"
import {t} from "../../utils/translate/t";
import CustomGoogleMap from "../../components/GoogleMap/CustomGoogleMap";
import {IAppProps} from "../../App";
import {
    BARBERSHOP_FACEBOOK_LINK,
    BARBERSHOP_INSTAGRAM_LINK,
    BARBERSHOP_MAIL_ADDRESS,
    BARBERSHOP_PHONE
} from "../../config/config";


const Contacts: FC<IAppProps> = (props) => {
    useEffect(() => {
        props.setTitle(t('contacts_title'))
    }, [])
    console.log(BARBERSHOP_MAIL_ADDRESS)
    return (
    <>
        <S.PageWrapper>
            <S.PageTitle>{t('title_page_contacts')}</S.PageTitle>
            <S.PageInfoWrapper>
                <S.ContactInfo>
                    <a href={'#'} >
                        <img src={"/svg/icons/location.svg"} alt="loc"/>
                        <span>{t('contacts_address')}</span>
                    </a>
                    <S.WorkTime>
                        <img src={"/svg/icons/time.svg"} alt="loc"/>
                        <div>
                            <span>{t('contacts_mon_fri')} 10:00 - 20:00 </span>
                            <p>{t('contacts_sat')} 10:00 - 19:00, </p>
                            <p>{t('contacts_sun')} 10:00 - 16:00</p>
                        </div>
                    </S.WorkTime>
                    <a href={`tel:${BARBERSHOP_PHONE}`} >
                        <img src={"/svg/icons/phone.svg"} alt="loc"/>
                        <span>{BARBERSHOP_PHONE}</span>
                    </a>
                    <a href={`mailto:${BARBERSHOP_MAIL_ADDRESS}`} >
                        <img src={"/svg/icons/letter.svg"} alt="loc"/>
                        <span>{BARBERSHOP_MAIL_ADDRESS}</span>
                    </a>
                </S.ContactInfo>
                <S.SocialWrapper>
                    <span>{t('contacts_subscribe')}</span>
                    <S.SocialIconWrapper>
                        <S.SocialIcon to={BARBERSHOP_INSTAGRAM_LINK} target={'_blank'} rel="noopener noreferrer">
                            <img src={'/svg/icons/instagram.svg'} alt={'insta'}/>
                        </S.SocialIcon>
                        <S.SocialIcon to={BARBERSHOP_FACEBOOK_LINK} target={'_blank'} rel="noopener noreferrer">
                            <img src={'/svg/icons/facebook.svg'} alt={'fb'}/>
                        </S.SocialIcon>
                    </S.SocialIconWrapper>
                </S.SocialWrapper>
            </S.PageInfoWrapper>
            <S.MapWrapper>
                <CustomGoogleMap/>
            </S.MapWrapper>
        </S.PageWrapper>
    </>
  );
};

export default Contacts;
