import React, { FC } from 'react'
import * as S from './metrics.styles'
import { useTranslation } from 'react-i18next'

const Metrics: FC = () => {
    const { t, i18n } = useTranslation()
    return (
        <>
            <S.Metrics>
                <S.Column>
                    <S.Row>
                        10 +
                    </S.Row>
                    <S.Row>
                        {t('home_exp_year')}
                    </S.Row>
                </S.Column>
                <S.Column>
                    <S.Row>
                        500
                    </S.Row>
                    <S.Row>
                        {t('home_client_mountly')}
                    </S.Row>
                </S.Column>
                <S.Column>
                    <S.Row>
                        89%
                    </S.Row>
                    <S.Row>
                        {t('home_recomend')}
                    </S.Row>
                </S.Column>
            </S.Metrics>
        </>
    )
}
export default Metrics