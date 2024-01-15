import React, { FC, ReactElement } from 'react'
import { openMenu } from '../../store/menu/menu.slice'
import { IMenuItem } from '../Menu/menu'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import * as S from '../Menu/menu.styles'

type IMenuItemsProps = {
    isMenuOpen: boolean
}
const MenuItems: FC<IMenuItemsProps> = ({ isMenuOpen }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const closeMenuEvent = () => {
        dispatch(openMenu(!isMenuOpen))
    }

    const home: IMenuItem = {
        text: t('header_menu_home'),
        type: 'home',
    }

    const services: IMenuItem = {
        text: t('header_menu_services'),
        type: 'services',
    }
    const gallery: IMenuItem = {
        text: t('header_menu_gallery'),
        type: 'gallery',
    }
    const barbers: IMenuItem = {
        text: t('header_menu_barbers'),
        type: 'barbers',
    }

    const shop: IMenuItem = {
        text: t('header_menu_shop'),
        type: 'shop',
    }

    const contacts: IMenuItem = {
        text: t('header_menu_contacts'),
        type: 'contacts',
    }

    let menuItems = new Map<string, IMenuItem>([
        ['', home],
        ['services', services],
        ['gallery', gallery],
        ['barbers', barbers],
        ['shop', shop],
        ['contacts', contacts],
    ])

    function getMenuItems(
        map: Map<string, IMenuItem>,
        closeMenuEvent: () => void,
    ) {
        let items: ReactElement[] = []
        let item: ReactElement

        map.forEach((menuItem: IMenuItem, key: string) => {
            if (!menuItem.url) {
                let to = '/' + key

                item = (
                    <S.MenuItem
                        key={key}
                    >
                        <S.MenuItemLink to={to} onClick={closeMenuEvent}>
                            <S.MenuItemText>
                                {menuItem.text}
                            </S.MenuItemText>
                        </S.MenuItemLink>
                    </S.MenuItem>
                )
            }
            items.push(item)
        })
        return items
    }

    return (
        <>
            {getMenuItems(
                menuItems,
                closeMenuEvent)}
        </>
    )
}
export default MenuItems