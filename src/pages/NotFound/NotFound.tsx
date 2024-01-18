import { FC } from 'react'
import * as S from "./notfound.styles";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
const NotFound: FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    return (
        <>
            <S.ErrorPageWrapper>
                <S.ErrorContainer>
                    <S.TitleWrapper>
                        <S.ErrorTitle>{t('error_oops')}</S.ErrorTitle>
                        <S.ErrorSubtitle>{t('error_smth_wrng')}</S.ErrorSubtitle>
                    </S.TitleWrapper>
                    <S.GoBack onClick={()=> navigate(-1)}>
                        <p>{t('error_goback_btn')}</p>
                        <p>{t('error_goback_btn')}</p>
                    </S.GoBack>
                </S.ErrorContainer>
            </S.ErrorPageWrapper>
        </>
    )
}
export default NotFound