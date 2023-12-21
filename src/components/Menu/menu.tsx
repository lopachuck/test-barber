import {FC, ReactElement} from 'react';
import * as S from './menu.styles'
import {useLocation} from "react-router-dom";
export interface IMenuItem {
  active: boolean
  text: string // @TODO add translate
  type: string
  url?: string
}

const home: IMenuItem = {
  active: false,
  text: 'home',
  type: 'home',
}

const services: IMenuItem = {
  active: false,
  text: 'services',
  type: 'services',
}
const gallery: IMenuItem = {
  active: false,
  text: 'gallery',
  type: 'gallery',
}
const barbers: IMenuItem = {
  active: false,
  text: 'barbers',
  type: 'barbers',
}

const shop: IMenuItem = {
  active: false,
  text: 'shop',
  type: 'shop',
}

const contacts: IMenuItem = {
  active: true,
  text: 'contacts',
  type: 'contacts',
}

let menuItems = new Map<string, IMenuItem>([
  ['home', home],
  ['services', services],
  ['gallery', gallery],
  ['barbers', barbers],
  ['shop', shop],
  ['contacts', contacts]
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

const Menu: FC = () => {
  const location = useLocation()
  const closeMenuEvent = () => {}
  
  return (
      <>
        {getMenuItems(
            menuItems,
            location,
            closeMenuEvent)}
      </>
  );
};

export default Menu;
