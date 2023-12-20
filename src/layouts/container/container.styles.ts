import styled from 'styled-components'
import { devices } from '../../devices'

export const StyledContainer = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    
    

    @media ${devices.md} {
        padding: 0 20px;
    }

    @media (max-width: 428px) {
        padding: 0;
    }
`
