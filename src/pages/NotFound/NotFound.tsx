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
                        <S.ErrorTitle>OOPS!</S.ErrorTitle>
                        <S.ErrorSubtitle>Something went wrong!</S.ErrorSubtitle>
                    </S.TitleWrapper>
                    <S.GoBack onClick={()=> navigate(-1)}>
                        <p>Go Back</p>
                        <p>Go Back</p>
                    </S.GoBack>
                </S.ErrorContainer>
            </S.ErrorPageWrapper>
        </>
    )
}
export default NotFound