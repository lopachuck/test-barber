import styled from 'styled-components'
import { devices } from '../../devices'

export const StyledContainer = styled.main`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    @media ${devices.md} {
    
    }

    @media (max-width: 428px) {
        padding: 0;
    }
`
