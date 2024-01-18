import styled from 'styled-components'
import { devices } from '../../devices'

export const StyledContainer = styled.main`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 80px auto 0;
    width: 100%;
    @media ${devices.md} {
        margin: 120px auto 0;
    }
    @media ${devices.xs_Landscape}{
        margin: 60px auto 0;
    }

    @media (max-width: 428px) {
        padding: 0;
    }
`
