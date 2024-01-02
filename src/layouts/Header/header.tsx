import * as S from './header.styles'
import React, { FC } from 'react'
import Menu from '../../components/Menu/menu'
import { t } from '../../utils/translate/t'
import { NavLink } from 'react-router-dom'
import {BookingBtn} from "../../ui-kit/btn/bookBtn.styles";

const Header: FC = () => {
    return (
        <>
            <S.HeaderContainer>
                <S.LogoWrapper to={''}>
                        <S.Logo src={'/svg/icons/logo.svg'} alt={'logo'} />
                </S.LogoWrapper>
                <S.MenuWrapper>
                    <Menu />
                </S.MenuWrapper>
                <S.BookingBtnWrapper>
                    <S.LangMenuWrapper>
                        <S.LangMenuBtn>
                            {t('LANG_BTN_ENG')}
                        </S.LangMenuBtn>
                        <S.LangMenuOptions>
                            <S.LangMenuOption></S.LangMenuOption>
                        </S.LangMenuOptions>
                    </S.LangMenuWrapper>
                    <BookingBtn to={'#'}>
                        <span>{t('btn_header_bookNow')}</span>
                        <p>{t('btn_header_bookNow')}</p>
                    </BookingBtn>
                </S.BookingBtnWrapper>
            </S.HeaderContainer>
        </>
    )
}

export default Header
