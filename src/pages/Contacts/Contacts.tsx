import {FC} from 'react';
import * as S from "./contacts.styles"
import {t} from "../../utils/translate/t";
import CustomGoogleMap from "../../components/GoogleMap/CustomGoogleMap";


const Contacts: FC = () => {
    return (
    <>
        <S.PageWrapper>
            <S.PageTitle>{t('contacts_title')}</S.PageTitle>
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
                    <a href={'tel:+37258365820'} >
                        <img src={"/svg/icons/phone.svg"} alt="loc"/>
                        <span>+37258365820</span>
                    </a>
                    <a href={'mailto:unclevebarbershop@gmail.com'} >
                        <img src={"/svg/icons/letter.svg"} alt="loc"/>
                        <span>unclevebarbershop@gmail.com</span>
                    </a>
                </S.ContactInfo>
                <S.SocialWrapper>
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
            </S.PageInfoWrapper>
            <S.MapWrapper>
                <CustomGoogleMap/>
            </S.MapWrapper>
        </S.PageWrapper>
    </>
  );
};

export default Contacts;
