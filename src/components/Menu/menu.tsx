import React, { FC } from 'react'
import * as S from './menu.styles'
import { useSelector } from 'react-redux'
import MobileMenuTrigger from '../MobileMenu/MobileMenu'
import BodyScrollLock from '../BodyScrollLock/BodyScrollLock'
import MenuItems from '../MenuItems/MenuItems'
import MobileLang from '../MobileLang/MobileLang'

export interface IMenuItem {
    text: string
    type: string
    url?: string
}

const Menu: FC = () => {
    const { isMenuOpen } = useSelector((state: any) => state.menu)
    return (
        <>
            {isMenuOpen && (<BodyScrollLock />)}
            <MobileMenuTrigger />
            <S.MenuWrapper isMenuOpen={isMenuOpen}>
                <MenuItems isMenuOpen={isMenuOpen} />
                <MobileLang />
            </S.MenuWrapper>
        </>
    )
}

export default Menu
