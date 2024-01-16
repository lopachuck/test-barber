import styled from 'styled-components'
import { PageWrapper, Title } from '../Page/page.styles'
import SHOP_PAGE_BG from '../../assets/shop/bg_shop.jpeg'
import { devices } from '../../devices'

export const ShopTitle = styled(Title)`
    padding-top: 0;
    font-size: 80px;
    line-height: 80px;
`
export const ShopPageWrapper = styled(PageWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
export const BgImage = styled.div`
    display: flex;
    height: 100vh;
    position: relative;
    background: url(${SHOP_PAGE_BG}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: 100% calc(100vh + 80px);
    background-position-y: -80px;
    background-position-x: center;
    @media ${devices.fhd} {
        background: url(${SHOP_PAGE_BG}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: 100% calc(100vh + 80px);
        background-position-y: -80px;
        background-position-x: center;
    }
    @media ${devices.md} {
        background: url(${SHOP_PAGE_BG}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: 100% calc(100vh);
        background-position-x: center;
    }
    @media ${devices.xs} {
        background: url(${SHOP_PAGE_BG}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: auto calc(100vh);
        background-position-x: center;
    }

`