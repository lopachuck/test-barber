import React, { FC } from 'react'
import * as S from './localization.styles'
import { BARBERSHOP_DIRECTION_LINK_WAZE } from '../../config/config'
import CustomGoogleMap from '../GoogleMap/CustomGoogleMap'
import { useTranslation } from 'react-i18next'

const Localization: FC = () => {
    const { t, i18n } = useTranslation()
    return (
        <>
            <S.Localization>
                <div>
                    <div>
                        <S.LocalizationTitle>{t('home_localization')}</S.LocalizationTitle>
                        <S.Address to={BARBERSHOP_DIRECTION_LINK_WAZE} target={'_blank'}>
                            {t('contacts_address')}
                        </S.Address>
                    </div>
                    <S.LocalizationWorkTime>
                        <div>
                            <p>
                                <span>{t('contacts_mon_fri')}&nbsp;
                                    <time>10:00</time> - <time>20:00</time> </span>
                            </p>
                            <S.WeekendWorkTimes>
                                <span>{t('contacts_sat')}&nbsp;
                                    <time>10:00</time> - <time>19:00</time>, </span>
                                <span>{t('contacts_sun')}&nbsp;
                                    <time>10:00</time> - <time>16:00</time></span>
                            </S.WeekendWorkTimes>
                            {/*<p>*/}
                            {/*    <span>{t('contacts_sat')}&nbsp;*/}
                            {/*        <time>10:00</time> - <time>19:00</time>, </span>*/}
                            {/*    <span>{t('contacts_sun')}&nbsp;*/}
                            {/*        <time>10:00</time> - <time>16:00</time></span>*/}
                            {/*</p>*/}
                        </div>
                    </S.LocalizationWorkTime>
                </div>
                <CustomGoogleMap />
            </S.Localization>
        </>
    )
}
export default Localization