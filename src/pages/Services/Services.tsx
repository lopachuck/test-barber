import React, { FC } from 'react'
import * as S from './services.styles'
import { BookingBtn } from '../../ui-kit/btn/bookBtn.styles'
import { IAppProps } from '../../App'
import { CenteredTitle, PageWrapper } from '../Page/page.styles'
import { useTranslation } from 'react-i18next'

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
                                    srcSet={'/img/services/hair-cut.webp, /img/services/hair-cut.jpeg 2x'}
                                    type={'image/webp'}/>
                                <img src="/img/services/hair-cut.jpeg"
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
                            <BookingBtn to={'#'}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/hair-cut_beard-correction.webp, /img/services/hair-cut_beard-correction.jpeg 2x'}
                                    type={'image/webp'}/>
                                <img src="/img/services/hair-cut_beard-correction.jpeg"
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
                            <BookingBtn to={'#'}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/beard_correction.webp, /img/services/beard_correction.jpeg 2x'}
                                    type={'image/webp'}/>
                                <img src="/img/services/beard_correction.jpeg" loading={'lazy'}
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
                            <BookingBtn to={'#'}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/beard_tinting.webp, /img/services/beard_tinting.jpeg 2x'}
                                    type={'image/webp'}/>
                                <img src="/img/services/beard_tinting.jpeg"
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
                            <BookingBtn to={'#'}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/clipper-cut.webp, /img/services/clipper-cut.jpeg 2x'}
                                    type={'image/webp'}/>
                                <img src="/img/services/clipper-cut.jpeg"
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
                            <BookingBtn to={'#'}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/hair-cut_beard-correction.webp, /img/services/hair-cut_beard-correction.jpeg 2x'}
                                    type={'image/webp'}/>
                                <img src="/img/services/hair-cut_beard-correction.jpeg"
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
                            <BookingBtn to={'#'}>
                                <span>{t('btn_services_book')}</span>
                                <p>{t('btn_services_book')}</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <source
                                    srcSet={'/img/services/hair-cut.webp, /img/services/hair-cut.jpeg 2x'}
                                    type={'image/webp'}/>
                                <img src="/img/services/hair-cut_beard-correction.jpeg"
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
                            <BookingBtn to={'#'}>
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