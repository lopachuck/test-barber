import styled from "styled-components";
import {CenteredTitle, PageWrapper} from "../Page/page.styles";
import ArrowBack from '../../assets/icon/arrow_back_black.svg'
import {devices} from "../../devices";
import ErrorImage from '../../assets/notfound/Error404.png'

export const ErrorPageWrapper = styled(PageWrapper)``
export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px auto 0;
`
export const TitleWrapper = styled.div`
    width: 464px;
    padding: 230px 0 40px;
    background-image: url(${ErrorImage});
    background-repeat: no-repeat;
    background-size: 100% auto;
    @media ${devices.sm}{
        width: 320px;
        padding: 172px 0 40px;
    }
`
export const ErrorTitle = styled(CenteredTitle)`
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 76px; /* 105.556% */
    letter-spacing: -1.44px;
    padding: 0 0 24px 0;
`

export const ErrorSubtitle = styled.h3`
    text-align: center;
    color: ${({theme}) => theme.colors.white};

    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
    text-transform: uppercase;
`
export const GoBack = styled.button`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 120px;
    height: 40px;
    border-radius: 12px;
    border: 1px solid ${({theme}) => theme.colors.elementsGrey};
    overflow: hidden;
    cursor: pointer;
    &:hover{
        &>p{
            transform: translateY(-40px);
        }
        @media ${devices.md} {
            &>p{
                transform: unset;
            }
        }
    }
    & > p{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 auto;
        width: 120px;
        height: 40px;
        color:  ${({theme}) => theme.colors.background};

        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 142.857% */
        text-transform: uppercase;

        transition: transform 0.3s ease-in-out;
        
    }
    & > p:first-child{
        background:  ${({theme}) => theme.colors.accentColor};
    }
    & > p:last-child{
        background:  ${({theme}) => theme.colors.white};
        &:before{
            content: url(${ArrowBack});
            width: 18px;
            height: 20px;
            margin-right: 4px;
        }
    }
`