import styled from 'styled-components'
import { PageWrapper, Title } from '../Page/page.styles'
import SHOP_PAGE_BG from '../../assets/shop/bg_shop.jpeg'
import { devices } from '../../devices'

export const ShopTitle = styled(Title)`
    //padding-top: 470px;
    padding-top: 0;
    font-size: 80px;
`
export const ShopPageWrapper = styled(PageWrapper)`
    display: flex;
    //min-height: 949px;
    align-items: center;
    justify-content: center;
`
export const BgImage = styled.div`
    display: flex;
    height: 100dvh;
    position: relative;
    background: linear-gradient(0deg, rgba(37, 36, 41, 0.70) 0%, rgba(37, 36, 41, 0.70) 100%), url(${SHOP_PAGE_BG}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: auto calc(100dvh + 80px);
    //background-size: auto 100dvh;
    //background-size: 100% 1024px;
    background-position-y: -80px;
    background-position-x: center;
    @media ${devices.fhd} {
        background: linear-gradient(0deg, rgba(37, 36, 41, 0.70) 0%, rgba(37, 36, 41, 0.70) 100%), url(${SHOP_PAGE_BG}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: auto calc(100dvh + 80px);
        //background-size: 100% 1024px;
        background-position-y: -80px;
        background-position-x: center;
    }
    @media ${devices.md} {
        background: linear-gradient(0deg, rgba(37, 36, 41, 0.70) 0%, rgba(37, 36, 41, 0.70) 100%), url(${SHOP_PAGE_BG}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: auto calc(100dvh + 80px);
        //background-size: 100% 828px;
        background-position-y: -80px;
        background-position-x: center;
    }
    @media ${devices.xs} {
        background: linear-gradient(0deg, rgba(37, 36, 41, 0.70) 0%, rgba(37, 36, 41, 0.70) 100%), url(${SHOP_PAGE_BG}), ${({ theme }) => theme.colors.backgroundBlack} 50%;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: auto calc(100dvh + 80px);
        background-position-y: 10px;
        background-position-x: center;
    }
    
`