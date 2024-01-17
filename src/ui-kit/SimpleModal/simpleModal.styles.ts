import styled from 'styled-components'
import { devices } from '../../devices'

export const Modal = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    //overflow: visible;
    //overflow-y: auto;
    transition: opacity 0.3s;
    z-index: 999;
`
export const ContentWrapper = styled.div.attrs({
    className: 'modal-wrapper',
})`
    position: absolute;
    top: 70px;
    left: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    @media ${devices.md}, ${devices.xs}, ${devices.ipad7th}, ${devices.ipad} {
        top: 60px;
    }
`
export const Content = styled.div`
    position: relative;
    border-radius: 20px;
    transform: translateY(-50px);
    transition: opacity 0.3s, transform 0.3s;
`