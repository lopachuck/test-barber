import { FC } from 'react'
import * as S from './barbers.styles'
import { BARBERSHOP_MAIL_ADDRESS } from '../../config/config'
import { useTranslation } from 'react-i18next'
import { PageWrapper, Subtitle, Title, TitleWrapper } from '../Page/page.styles'
import BarberPhoto from '../../components/BarberPhoto/BarberPhoto'

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
                        <BarberPhoto key={1} srcOriginal={'/img/barbers/Valeria.jpeg'}
                                     srcWebp={'/img/barbers/1440webp/Valeria_1440x1440.webp'}
                                     srcHoverOriginal={'/img/barbers/colored/Valeria.jpeg'}
                                     srcHoverWebp={'/img/barbers/colored/1440webp/Valeria_1440x1440.webp'}
                                     alt={'Valeria'} />
                        <S.BarberName>Valeria</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <BarberPhoto key={2} srcOriginal={'/img/barbers/Vitalii.jpeg'}
                                     srcWebp={'/img/barbers/1440webp/Vitalii_1440x1440.webp'}
                                     srcHoverOriginal={'/img/barbers/colored/Vitalii.jpeg'}
                                     srcHoverWebp={'/img/barbers/colored/1440webp/Vitalii_1440x1440.webp'}
                                     alt={'Vitalii'} />
                        <S.BarberName>Vitalii</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <BarberPhoto key={3} srcOriginal={'/img/barbers/Viktoriia.jpeg'}
                                     srcWebp={'/img/barbers/1440webp/Viktoriia_1440x1440.webp'}
                                     srcHoverOriginal={'/img/barbers/colored/Viktoriia.jpeg'}
                                     srcHoverWebp={'/img/barbers/colored/1440webp/Viktoriia_1440x1440.webp'}
                                     alt={'Victoriia'} />
                        <S.BarberName>Victoriia</S.BarberName>
                        <S.BarberPosition>{t('barbers_barber_position')}</S.BarberPosition>
                    </S.BarberInfo>
                    <S.BarberInfo>
                        <BarberPhoto key={4} srcOriginal={'/img/barbers/Alina.jpeg'}
                                     srcWebp={'/img/barbers/1440webp/Alina_1440x1440.webp'}
                                     srcHoverOriginal={'/img/barbers/colored/Alina.jpeg'}
                                     srcHoverWebp={'/img/barbers/colored/1440webp/Alina_1440x1440.webp'}
                                     alt={'Alina'} />
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