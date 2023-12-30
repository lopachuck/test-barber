import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const btn = styled(NavLink)`
    display: flex;
    width: 9.25rem;
    height: 2.5rem;
    padding: 0.625rem 1.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.75rem;
    border: 1px solid #6B6B6B;
    background: #FFF;
`

export const BookBtn = styled(btn)`
    background: #FFC32A;
`