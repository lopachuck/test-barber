import React, { FC } from 'react'
import * as S from '../Menu/menu.styles'
import LangMobileOption from '../LangMobileOption/LangMobileOption'

const MobileLang: FC = () => {
    return (
        <>
            <S.MobileLangWrapper>
                <LangMobileOption lang={'ENG'} />
                <LangMobileOption lang={'EST'} />
                <LangMobileOption lang={'UKR'} />
                <LangMobileOption lang={'RU'} />
            </S.MobileLangWrapper>
        </>
    )
}
export default MobileLang