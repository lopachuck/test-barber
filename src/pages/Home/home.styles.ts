import styled from "styled-components";
import BG from '../../assets/home/bg_title.jpeg'
import {PageWrapper} from "../Page/page.styles";

export const HomePageWrapper = styled(PageWrapper)`
    background-image: url(${BG});
    background-position: center;
    max-height: 950px;
    background-repeat: no-repeat;
    background-origin: border-box;
`

