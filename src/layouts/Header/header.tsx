import * as S from './header.styles'
import React, { FC, useState } from 'react'
import Menu from '../../components/Menu/menu'
import { t } from '../../utils/translate/t'
import { NavLink } from 'react-router-dom'
import SimpleModal from '../../ui-kit/SimpleModal/SimpleModal'

const Header: FC = () => {
    const [langOptionOpen, setLangOptionOpen] = useState(false)
    const [currentLang, setCurrentLang] = useState('ENG')
    return (
        <>
            <S.HeaderContainer>
                <S.LogoWrapper>
                    <NavLink to={''}>
                        <S.Logo src={'/svg/icons/logo.svg'} alt={'logo'} />
                    </NavLink>
                </S.LogoWrapper>
                <S.MenuWrapper>
                    <Menu />
                </S.MenuWrapper>
                <S.BookingBtnWrapper>
                    <S.LangMenuWrapper>
                        <SimpleModal
                            isOpen={langOptionOpen}
                            onClose={() => setLangOptionOpen(false)}
                        >
                            <S.LangMenuOptions>
                                <S.LangMenuOption className={currentLang === 'ENG' ? 'active' : ''}
                                                  onClick={() => setCurrentLang('ENG')}>ENG</S.LangMenuOption>
                                <S.LangMenuOption className={currentLang === 'EST' ? 'active' : ''}
                                    onClick={() => setCurrentLang('EST')}>EST</S.LangMenuOption>
                                <S.LangMenuOption className={currentLang === 'RU' ? 'active' : ''}
                                    onClick={() => setCurrentLang('RU')}>RU</S.LangMenuOption>
                                <S.LangMenuOption className={currentLang === 'UKR' ? 'active' : ''}
                                    onClick={() => setCurrentLang('UKR')}>UKR</S.LangMenuOption>
                            </S.LangMenuOptions>
                        </SimpleModal>
                        <S.LangMenuBtn onClick={() => setLangOptionOpen(true)}>
                            {currentLang}
                            {/*{t('LANG_BTN_ENG')}*/}
                        </S.LangMenuBtn>
                    </S.LangMenuWrapper>
                    <S.BookingBtn to={'#'}>
                        <span>{t('btn_header_bookNow')}</span>
                        <p>{t('btn_header_bookNow')}</p>
                    </S.BookingBtn>
                </S.BookingBtnWrapper>
            </S.HeaderContainer>
        </>
    )
}

export default Header
