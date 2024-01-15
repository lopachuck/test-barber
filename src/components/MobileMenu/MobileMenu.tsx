import React, { FC, useEffect, useState } from 'react'
import * as S from './mobileMenu.styles'
import { openMenu } from '../../store/menu/menu.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const MobileMenuTrigger: FC = () => {
    const location = useLocation()
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const { isMenuOpen } = useSelector((state: any) => state.menu)
    const dispatch = useDispatch()
    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        dispatch(openMenu(!isMenuOpen))
        setIsMenuVisible(!isMenuOpen)
    }

    useEffect(() => {
        if (isMenuVisible) {
            dispatch(openMenu(!isMenuOpen))
            setIsMenuVisible(!isMenuVisible)
        }
    }, [location])
    return (
        <>
            <S.MobileMenuWrapper>
                <S.BurgerBtn onClick={handleClick}>
                    <S.Cross className={isMenuVisible ? 'cross' : ''}>
                        <S.BtnLine />
                    </S.Cross>
                </S.BurgerBtn>
            </S.MobileMenuWrapper>
        </>
    )
}
export default MobileMenuTrigger