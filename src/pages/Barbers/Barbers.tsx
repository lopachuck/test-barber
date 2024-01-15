import { FC } from 'react'
import * as S from './barbers.styles'
import { BARBERSHOP_MAIL_ADDRESS } from '../../config/config'
import { useTranslation } from 'react-i18next'
import { PageWrapper, Subtitle, Title, TitleWrapper } from '../Page/page.styles'

const Barbers: FC = () => {
    const { t, i18n } = useTranslation()
    return (
        <>
            <PageWrapper>
                <TitleWrapper>
                    <Title>{t('title_page_barbers')}</Title>
                    <Subtitle>{t('barbers_subtitle')}</Subtitle>
                </TitleWrapper>
                <S.BarbersInfo>
                    <S.BarberInfo>
                        <S.BarberPhoto>
                            <source srcSet={'/img/barbers/600webp/Valeria_600_600.webp 2x'} type={'image/webp'} />
                            <img src={'/img/barbers/600jpeg/Valeria.jpeg'} loading={'lazy'} alt="Valeria" />
                        </S.BarberPhoto>
                        <S.BarberName>Valeria</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <S.BarberPhoto>
                            <source srcSet={'/img/barbers/600webp/Vitalii_600_600.webp 2x'} type="image/webp" />
                            <img src={'/img/barbers/600jpeg/Vitalii.jpeg'} loading={'lazy'} alt="Vitalii" />
                        </S.BarberPhoto>
                        <S.BarberName>Vitalii</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <S.BarberPhoto>
                            <source srcSet={'/img/barbers/600webp/Viktoriia_600_600.webp 2x'} type="image/webp" />
                            <img src={'/img/barbers/600jpeg/Viktoriia.jpeg'} loading={'lazy'} alt="Victoriia" />
                        </S.BarberPhoto>
                        <S.BarberName>Victoriia</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <S.BarberPhoto>
                            <source srcSet={'/img/barbers/600webp/Alina_600_600.webp 2x'} type="image/webp" />
                            <img src={'/img/barbers/600jpeg/Alina.jpeg'} loading={'lazy'} alt="Alina" />
                        </S.BarberPhoto>
                        <S.BarberName>Alina</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                </S.BarbersInfo>
                <S.JoinUsInfoWrapper>
                    <S.InfoTitle>{t('barbers_info_title')}</S.InfoTitle>
                    <S.InfoText>
                        {t('barbers_info_text')} - <S.MailLink
                        href={`mailto:${BARBERSHOP_MAIL_ADDRESS}`}>{BARBERSHOP_MAIL_ADDRESS}</S.MailLink>
                    </S.InfoText>
                </S.JoinUsInfoWrapper>
            </PageWrapper>
        </>
    )
}

export default Barbers