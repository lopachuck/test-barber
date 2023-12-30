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
                            <source srcSet={'/img/barbers/barb1.webp, /img/barbers/barb1.jpg 2x'} type={"image/webp"}/>
                            <img src={'/img/barbers/barb1.jpg'} loading={'lazy'} alt=""/>
                        </S.BarberPhoto>
                        <S.BarberName>Valeria</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <S.BarberPhoto>
                            <source srcSet={'/img/barbers/barb2.webp, /img/barbers/barb2.jpg 2x'} type="image/webp"/>
                            <img src={'/img/barbers/barb2.jpg'} loading={'lazy'} alt=""/>
                        </S.BarberPhoto>
                        <S.BarberName>Vitalii</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <S.BarberPhoto>
                            <source srcSet={'/img/barbers/barb3.webp, /img/barbers/barb3.jpg 2x'} type="image/webp"/>
                            <img src={'/img/barbers/barb3.jpg'} loading={'lazy'} alt=""/>
                        </S.BarberPhoto>
                        <S.BarberName>Victoriia</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <S.BarberPhoto>
                            <source srcSet={'/img/barbers/barb4.webp, /img/barbers/barb4.jpg 2x'} type="image/webp"/>
                            <img src={'/img/barbers/barb4.jpg'} loading={'lazy'} alt=""/>
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