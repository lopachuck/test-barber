import {FC} from 'react';
import { PageWrapper } from "../Contacts/contacts.styles";
import {t} from "../../utils/translate/t";
import * as S from "./barbers.styles"
import {BARBERSHOP_MAIL_ADDRESS} from "../../config/config";

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
                        <S.BarberPhoto>
                            <source srcSet={'/img/barbers/Valeria.webp'} type={"image/webp"}/>
                            <source srcSet={'/img/barbers/Valeria.jpg'} type={"image/jpg"}/>
                            <img src={'/img/barbers/Valeria.jpg'} loading={'lazy'} alt=""/>
                        </S.BarberPhoto>
                        <S.BarberName>Valeria</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <S.BarberPhoto>
                            <source srcSet={'/img/barbers/Valerii.webp'} type="image/webp"/>
                            <source srcSet={'/img/barbers/Valerii.jpg'} type="image/jpg"/>
                            <img src={'/img/barbers/Valerii.jpg'} loading={'lazy'} alt=""/>
                        </S.BarberPhoto>
                        <S.BarberName>Valerii</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <S.BarberPhoto>
                            <source srcSet={'/img/barbers/Viktoria.webp'} type="image/webp"/>
                            <source srcSet={'/img/barbers/Viktoria.jpg'} type="image/jpg"/>
                            <img src={'/img/barbers/Viktoria.jpg'} loading={'lazy'} alt=""/>
                        </S.BarberPhoto>
                        <S.BarberName>Viktoria</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <S.BarberPhoto>
                            <source srcSet={'/img/barbers/Alina.webp'} type="image/webp"/>
                            <source srcSet={'/img/barbers/Alina.jpg'} type="image/jpg"/>
                            <img src={'/img/barbers/Valeria.jpg'} loading={'lazy'} alt=""/>
                        </S.BarberPhoto>
                        <S.BarberName>Alina</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                </S.BarbersInfo>
                <S.JoinUsInfoWrapper>
                    <S.InfoTitle>{t('barbers_info_title')}</S.InfoTitle>
                    <S.InfoText>
                        {t('barbers_info_text')} - <S.MailLink href={`mailto:${BARBERSHOP_MAIL_ADDRESS}`}>{BARBERSHOP_MAIL_ADDRESS}</S.MailLink>
                    </S.InfoText>
                </S.JoinUsInfoWrapper>
            </PageWrapper>
        </>
    )
}

export default Barbers;