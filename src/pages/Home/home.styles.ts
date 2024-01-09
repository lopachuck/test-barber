import styled, {keyframes} from "styled-components";
import { Subtitle, Title, TitleWrapper } from '../Page/page.styles'
import arrowDown from '../../assets/icon/icon/arrow/down.svg'


const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const HomeTitleWrapper = styled(TitleWrapper)`
    margin-top: 595px;
    margin-bottom: 60px;
`

export const HomeSubtitle = styled(Subtitle)`
    position: relative;

    &:before {
        position: absolute;
        top: 0;
        left: -89px;
        display: flex;
        content: " ";
        width: 64px;
        height: 64px;
        background-image: url(${arrowDown});
    }
`
export const HomeTitle = styled(Title)`
    padding-top: 0;
`
export const LogoLine = styled.div`
    position: absolute;
    z-index: 9999;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 73px;
    background: #fff;
`


export const AboutUs = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow: visible;
    width: 100vw;
`

export const BrendAnimation = styled.object`
    display: flex;
    width: 100%;
    animation: ${marqueeAnimation} 10s linear infinite;
`