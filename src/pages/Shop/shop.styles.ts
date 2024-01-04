import styled from 'styled-components'
import BG from '../../assets/shop/bg_shop.jpeg'

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 1200px;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
`