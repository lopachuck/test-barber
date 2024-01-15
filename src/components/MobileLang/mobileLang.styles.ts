import styled from 'styled-components'
import { devices } from '../../devices'

export const MobileLangWrapper = styled.div`
    display: none;
    align-self: flex-end;
    justify-content: center;
    width: 100%;
    margin-top: auto;
    color: ${({ theme }) => theme.colors.white};
    border-top: 1px solid ${({ theme }) => theme.colors.elementsGrey};
    padding-top: 20px;
    padding-bottom: 80px;
    gap: 20px;

    & > div {
        display: flex;
        width: 58px;
        height: 40px;
        justify-content: center;
        align-items: center;
        border: 1px solid ${({ theme }) => theme.colors.elementsGrey};
        border-radius: 12px;
        cursor: pointer;
    }

    & > .selected {
        border: 1px solid ${({ theme }) => theme.colors.accentColor};

    }

    @media ${devices.md} {
        display: flex;
    }
`