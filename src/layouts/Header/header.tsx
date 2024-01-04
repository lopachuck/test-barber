import * as S from './header.styles'
import React, { FC, useEffect, useState } from 'react'
import Menu from '../../components/Menu/menu'
import { BookingBtn } from '../../ui-kit/btn/bookBtn.styles'
import SimpleModal from '../../ui-kit/SimpleModal/SimpleModal'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

const Header: FC = () => {
    const [langOptionOpen, setLangOptionOpen] = useState(false)
    const [currentLang, setCurrentLang] = useState(i18n.language.toUpperCase())

    useEffect(() => {
        i18n.changeLanguage(currentLang.toLowerCase())
    }, [currentLang])
    const { t } = useTranslation()

    return (
        <>
            <S.HeaderContainer>
                <S.HeaderWrapper>
                    <S.LogoWrapper to={''}>
                        <S.Logo src={'/svg/icons/logo.svg'} alt={'logo'} />
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
                                <S.LangMenu>
                                    <S.LangMenuOption className={currentLang === 'ENG' ? 'active' : ''}
                                                      onClick={() => setCurrentLang('ENG')}>ENG</S.LangMenuOption>
                                    <S.LangMenuOption className={currentLang === 'EST' ? 'active' : ''}
                                                      onClick={() => setCurrentLang('EST')}>EST</S.LangMenuOption>
                                    <S.LangMenuOption className={currentLang === 'RU' ? 'active' : ''}
                                                      onClick={() => setCurrentLang('RU')}>RU</S.LangMenuOption>
                                    <S.LangMenuOption className={currentLang === 'UKR' ? 'active' : ''}
                                                      onClick={() => setCurrentLang('UKR')}>UKR</S.LangMenuOption>
                                </S.LangMenu>
                            </SimpleModal>
                            <S.LangMenuBtn onClick={() => setLangOptionOpen(true)}>
                                {currentLang}
                                {/*{t('LANG_BTN_ENG')}*/}
                            </S.LangMenuBtn>
                        </S.LangMenuWrapper>
                        <BookingBtn to={'#'}>
                            <span>{t('btn_header_bookNow')}</span>
                            <p>{t('btn_header_bookNow')}</p>
                        </BookingBtn>
                    </S.BookingBtnWrapper>
                </S.HeaderWrapper>
            </S.HeaderContainer>
        </>
    )
}

export default Header
