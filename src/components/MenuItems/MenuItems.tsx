import React, { FC, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from '../Menu/menu.styles'

const MenuItems: FC = () => {
    const { t } = useTranslation()

    let menuItems = new Map<string, string>([
        ['', t('header_menu_home')],
        ['services', t('header_menu_services')],
        ['gallery', t('header_menu_gallery')],
        ['barbers', t('header_menu_barbers')],
        ['shop', t('header_menu_shop')],
        ['contacts', t('header_menu_contacts')],
    ])

    function getMenuItems(
        map: Map<string, string>,
    ) {
        let items: ReactElement[] = []
        let item: ReactElement

        map.forEach((menuItem: string, key: string) => {
            let to = '/' + key

            item = (
                <S.MenuItem key={key}>
                    <S.MenuItemLink to={to}>
                        <S.MenuItemText>
                            {menuItem}
                        </S.MenuItemText>
                    </S.MenuItemLink>
                </S.MenuItem>
            )
            items.push(item)
        })
        return items
    }

    return (
        <>
            {getMenuItems(menuItems)}
        </>
    )
}
export default MenuItems