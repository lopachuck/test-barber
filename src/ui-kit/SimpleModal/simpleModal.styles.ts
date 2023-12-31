import styled from 'styled-components'

export const Modal = styled.div`
    //position: fixed;
    //top: 0;
    //left: 0;
    //width: 100%;
    //height: 100%;
    background-color:
            rgba(0, 0, 0, 0.75);
    /* opacity: 0; */
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
    //left: -60px;
    //left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    //width: 100%;
    //min-height: 100%;
`
export const Content = styled.div`
    position: relative;
    //margin: 20px;
    //width: 100%;
    //max-width: 200px;
    border-radius: 20px;
    //background-color: #ffffff;
    //padding: 40px 20px 20px 20px;
    transform: translateY(-50px);
    transition: opacity 0.3s, transform 0.3s;
`
export const ContentWrapper2 = styled.div``