import React, { FC } from 'react'
import * as S from './services.styles'
import { BookingBtn } from '../../ui-kit/btn/bookBtn.styles'
import { IAppProps } from '../../App'
import { CenteredTitle, PageWrapper } from '../Page/page.styles'
import { useTranslation } from 'react-i18next'
import {
    SERVICES_BEARD_CORRECTION,
    SERVICES_BEARD_TINTING,
    SERVICES_CLIPPER_CUT,
    SERVICES_CLIPPER_CUT_PLUS_SERVICES_BEARD_CORRECTION,
    SERVICES_FATHER_SON,
    SERVICES_MENS_HAIRCUT,
    SERVICES_MENS_HAIRCUT_PLUS_SERVICES_BEARD_CORRECTION,
} from '../../config/config'

const Services: FC<IAppProps> = (props) => {
    const { t } = useTranslation()
    return (
        <>
            <PageWrapper>
                <CenteredTitle>{t('title_page_services')}</CenteredTitle>
                <S.Services>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/webp/Mens_haircut_288x288.webp'}
                                    type={'image/webp'}/>
                                <img src="/img/services/jpeg/Mens_haircut_288x288.jpeg"
                                     loading={'lazy'}
                                     alt={t('services_mens_haircut')}/>
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.ServiceTitle>{t('services_mens_haircut')}</S.ServiceTitle>
                                <S.Description>{t('services_mens_haircut_description')}</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>30 €</S.Price>
                                <S.Duration>60 {t('minutes')}</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={SERVICES_MENS_HAIRCUT}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/webp/Mens_haircut+beard_correction_288x288.webp'}
                                    type={'image/webp'}/>
                                <img src="/img/services/jpeg/Mens_haircut+beard_correction_288x288.jpeg"
                                     loading={'lazy'}
                                     alt={`${t('services_mens_haircut')} + ${t('services_beard_correction')}`}/>
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.ServiceTitle>{t('services_mens_haircut')} + {t('services_beard_correction')}</S.ServiceTitle>
                                <S.Description>{t('services_mens_haircut_beard_description')}</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>45 €</S.Price>
                                <S.Duration>1 {t('hour')} 30 {t('minutes')}</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={SERVICES_MENS_HAIRCUT_PLUS_SERVICES_BEARD_CORRECTION}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/webp/Beard_correction_288x288.webp'}
                                    type={'image/webp'}/>
                                <img src="/img/services/jpeg/Beard_correction_288x288.jpeg"
                                     loading={'lazy'}
                                     alt={t('services_beard_correction')}/>
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.ServiceTitle>{t('services_beard_correction')}</S.ServiceTitle>
                                <S.Description>{t('services_beard_correction_description')}</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>20 €</S.Price>
                                <S.Duration>45 {t('minutes')}</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={SERVICES_BEARD_CORRECTION}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/webp/Beard_tinting_288x288.webp'}
                                    type={'image/webp'}/>
                                <img src="/img/services/jpeg/Beard_tinting_288x288.jpeg"
                                     loading={'lazy'}
                                     alt={t('services_beard_tinting')}/>
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.ServiceTitle>{t('services_beard_tinting')}</S.ServiceTitle>
                                <S.Description>{t('services_beard_tinting_description')}</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>10 €</S.Price>
                                <S.Duration>20 {t('minutes')}</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={SERVICES_BEARD_TINTING}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/webp/Clipper_Cut_288x288.webp'}
                                    type={'image/webp'}/>
                                <img src="/img/services/jpeg/Clipper_Cut_288x288.jpeg"
                                     loading={'lazy'}
                                     alt={t('services_clipper_cut')}/>
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.ServiceTitle>{t('services_clipper_cut')}</S.ServiceTitle>
                                <S.Description>{t('services_clipper_cut_description')}</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>22 €</S.Price>
                                <S.Duration>45 {t('minutes')}</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={SERVICES_CLIPPER_CUT}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/webp/Clipper_Cut+beard_correction_288x288.webp'}
                                    type={'image/webp'}/>
                                <img src="/img/services/jpeg/Clipper_Cut+beard_correction_288x288.jpeg"
                                     loading={'lazy'}
                                     alt={`${t('services_clipper_cut')} + ${t('services_beard_correction')}`}/>
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.ServiceTitle>{t('services_clipper_cut')} + {t('services_beard_correction')}</S.ServiceTitle>
                                <S.Description>{t('services_clipper_cut_beard_description')}</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>35 €</S.Price>
                                <S.Duration>60 {t('minutes')}</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={SERVICES_CLIPPER_CUT_PLUS_SERVICES_BEARD_CORRECTION}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/webp/Father_and_Son_288x288.webp'}
                                    type={'image/webp'}/>
                                <img src="/img/services/jpeg/Father_and_Son_288x288.jpeg"
                                     loading={'lazy'}
                                     alt={t('services_father_son')}/>
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.ServiceTitle>{t('services_father_son')}</S.ServiceTitle>
                                <S.Description>{t('services_father_son_description')}</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>40 €</S.Price>
                                <S.Duration>1 {t('hour')} 15 {t('minutes')}</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={SERVICES_FATHER_SON}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                </S.Services>
            </PageWrapper>
        </>
    )
}
export default Services