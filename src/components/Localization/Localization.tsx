import React, { FC } from 'react'
import * as S from './localization.styles'
import { BARBERSHOP_DIRECTION_LINK } from '../../config/config'
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
                        <S.Address to={BARBERSHOP_DIRECTION_LINK} target={'_blank'}>
                            {t('contacts_address')}
                        </S.Address>
                    </div>
                    <S.LocalizationWorkTime>
                        <div>
                            <span>{t('contacts_mon_fri')} 10:00 - 20:00 </span>
                            <p>{t('contacts_sat')} 10:00 - 19:00, </p>
                            <span>{t('contacts_sun')} 10:00 - 16:00</span>
                        </div>
                    </S.LocalizationWorkTime>
                </div>
                <CustomGoogleMap />
            </S.Localization>
        </>
    )
}
export default Localization