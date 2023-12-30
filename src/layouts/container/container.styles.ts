import styled from 'styled-components'
import { devices } from '../../devices'

export const StyledContainer = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    //@todo WIDTH Margin Padding position container against header and footer
    margin: 0 auto;

    @media ${devices.md} {
    
    }

    @media (max-width: 428px) {
        padding: 0;
    }
`
