import styled from "styled-components";

export const MarkerInfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    &>p{
        text-transform: uppercase;
        font-size: 16px;
        color: ${({theme}) => theme.colors.background};
    }
    &>a{
        text-decoration: none;
        border-bottom: 1px solid ${({theme}) => theme.colors.background};
    }
`