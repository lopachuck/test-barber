import {FC} from 'react';
import {PageTitle, PageWrapper} from "../Contacts/contacts.styles";
import {t} from "../../utils/translate/t";
import * as S from "./barbers.styles"

const Barbers: FC = () => {
    return (
        <>
            <PageWrapper>
                <S.PageTitleWrapper>
                    <S.PageTitle>{t('title_page_barbers')}</S.PageTitle>
                    <S.PageSubtitle>{t('barbers_subtitle')}</S.PageSubtitle>
                </S.PageTitleWrapper>
                <S.BarbersInfo>
                    <S.BarberInfo>
                        <S.BarberPhotoWrapper>
                            <S.BarberPhoto src={'/img/barbers/Valeria.png'}/>
                        </S.BarberPhotoWrapper>
                        <S.BarberName>Valeria</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <S.BarberPhotoWrapper>
                            <S.BarberPhoto src={'/img/barbers/Valerii.png'}/>
                        </S.BarberPhotoWrapper>
                        <S.BarberName>Valerii</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <S.BarberPhotoWrapper>
                            <S.BarberPhoto src={'/img/barbers/Valeria.png'}/>
                        </S.BarberPhotoWrapper>
                        <S.BarberName>Viktoria</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <S.BarberPhotoWrapper>
                            <S.BarberPhoto src={'/img/barbers/Valeria.png'}/>
                        </S.BarberPhotoWrapper>
                        <S.BarberName>Viktoria Li</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                </S.BarbersInfo>
                <S.JoinUsInfoWrapper>
                    <S.InfoTitle>{t('barbers_info_title')}</S.InfoTitle>
                    <S.InfoText>
                        {t('barbers_info_text')} - <S.MailLink href={'mailto:unclevebarbershop@gmail.com'}>unclevebarbershop@gmail.com</S.MailLink>
                    </S.InfoText>
                </S.JoinUsInfoWrapper>
            </PageWrapper>
        </>
    )
}

export default Barbers;