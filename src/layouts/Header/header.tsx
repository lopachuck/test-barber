import * as S from './header.styles'
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
//import { useActions } from '../../hooks/useActions'
import { useNavigate } from 'react-router-dom'
import Menu from "../../components/Menu/menu";
// import { t } from '../../utils/translate/t'
// import { Tooltip } from 'react-tooltip'

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
              <S.LangMenuWrapper>
                <S.LangMenu>
                    ENG
                </S.LangMenu>
              </S.LangMenuWrapper>
                <S.BookingBtnWrapper>
                    <S.BookingBtn to={'#'}>
                        Book now
                    </S.BookingBtn>
                </S.BookingBtnWrapper>
              
            </S.HeaderContainer>
        </>
    )
}

export default Header
