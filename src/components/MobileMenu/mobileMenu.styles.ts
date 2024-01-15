import styled from 'styled-components'
import { devices } from '../../devices'


export const MobileMenuWrapper = styled.div`
    display: none;
    @media ${devices.md} {
        display: flex;
    }
`
export const BurgerBtn = styled.div`
    display: none;
    @media ${devices.md} {
        display: flex;
        align-items: center;
        position: relative;
        min-width: 30px;
        min-height: 30px;
        z-index: 200;
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.textCurrentItemMenu};
        border-radius: 50%;
    }
`
export const BtnLine = styled.div`
    @media ${devices.md} {
        display: block;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.white};
        width: 100%;
        height: 2px;
        top: 8px;
        transition: all 0.3s ease 0s;
    }
`
export const Cross = styled.div`
    @media ${devices.md} {
        position: relative;
        width: 24px;
        margin: 0 auto;
        height: 19px;
        z-index: 1;

        &:before,
        &:after {
            content: '';
            background-color: ${({ theme }) => theme.colors.white};
            position: absolute;
            width: 100%;
            height: 2px;
            transition: all 0.3s ease 0s;
        }

        &:before {
            top: 1px;
        }

        &:after {
            bottom: 2px;
        }

        &.cross > ${BtnLine} {
            display: none;
        }

        &.cross:after {
            transform: rotate(45deg);
            bottom: 8px;
        }

        &.cross:before {
            transform: rotate(-45deg);
            top: 9px;
        }
    }
`