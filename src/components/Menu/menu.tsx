import React, { FC, ReactElement, useState } from 'react'
import * as S from './menu.styles'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openMenu } from '../../store/menu/menu.slice'
import { useTranslation } from 'react-i18next'

export interface IMenuItem {
  active: boolean
  text: string 
  type: string
  url?: string
}

const Menu: FC = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const { isMenuOpen } = useSelector((state: any) => state.menu)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const handleClick = () => {
    dispatch(openMenu(!isMenuOpen))
    setIsMenuVisible(!isMenuOpen)
  }
  
  const location = useLocation()
  const closeMenuEvent = () => {
    dispatch(openMenu(!isMenuOpen))
    setIsMenuVisible(!isMenuVisible)
  }

  const home: IMenuItem = {
    active: false,
    text: t('header_menu_home'),
    type: 'home',
  }

  const services: IMenuItem = {
    active: false,
    text: t('header_menu_services'),
    type: 'services',
  }
  const gallery: IMenuItem = {
    active: false,
    text: t('header_menu_gallery'),
    type: 'gallery',
  }
  const barbers: IMenuItem = {
    active: false,
    text: t('header_menu_barbers'),
    type: 'barbers',
  }

  const shop: IMenuItem = {
    active: false,
    text: t('header_menu_shop'),
    type: 'shop',
  }

  const contacts: IMenuItem = {
    active: true,
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

  interface LocationState {
    pathname: string
  }


  function getMenuItems(
      map: Map<string, IMenuItem>,
      location: LocationState,
      closeMenuEvent: () => void,
  ) {
    let items: ReactElement[] = []
    let item: ReactElement

    map.forEach((menuItem: IMenuItem, key: string) => {
      if (!menuItem.url) {
        let to = '/' + key

        item = (
            <S.MenuItem
                className={menuItem.active ? 'active' : ''}
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
        <S.MobileMenuWrapper>
          <S.BurgerBtn onClick={handleClick}>
            <S.Cross className={isMenuVisible ? 'cross' : ''}>
              <S.BtnLine />
            </S.Cross>
          </S.BurgerBtn>
        </S.MobileMenuWrapper>
        <S.DesktopMenuWrapper isMenuOpen={ isMenuOpen }>
          {getMenuItems(
            menuItems,
            location,
            closeMenuEvent)}
          <S.MobileLangWrapper>
            <div className={'selected'}>ENG</div>
            <div>EST</div>
            <div>UKR</div>
            <div>RU</div>
          </S.MobileLangWrapper>
        </S.DesktopMenuWrapper>
      </>
  );
};

export default Menu;
