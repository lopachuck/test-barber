import * as S from './header.styles'
import React, { FC } from 'react'
import Menu from "../../components/Menu/menu";
import { t } from '../../utils/translate/t'

const Header: FC = () => {
    return (
        <>
            <S.HeaderContainer>
                <S.LogoWrapper>
                    <S.Logo src={'/svg/icons/logo.svg'} alt={'logo'}/>
                </S.LogoWrapper>
                <S.MenuWrapper>
                    <Menu/>
                </S.MenuWrapper>
                <S.BookingBtnWrapper>
                    <S.LangMenuWrapper>
                        <S.LangMenuBtn>
                            {t('LANG_BTN_ENG')}
                        </S.LangMenuBtn>
                        <S.LangMenuOptions >
                            <S.LangMenuOption ></S.LangMenuOption>
                        </S.LangMenuOptions>
                    </S.LangMenuWrapper>
                    <S.BookingBtn to={'#'}>
                        {t('header_bookNow_btn')}
                    </S.BookingBtn>
                </S.BookingBtnWrapper>
            </S.HeaderContainer>
        </>
    )
}

export default Header
