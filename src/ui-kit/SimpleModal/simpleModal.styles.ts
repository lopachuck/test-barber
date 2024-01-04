import styled from 'styled-components'

export const Modal = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    overflow: hidden;
    overflow-y: auto;
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
`
export const Content = styled.div`
    position: relative;
    border-radius: 20px;
    transform: translateY(-50px);
    transition: opacity 0.3s, transform 0.3s;
`