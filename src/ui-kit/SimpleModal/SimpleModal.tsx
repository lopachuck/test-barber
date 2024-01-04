import React, { FC, useCallback, useEffect, useRef } from 'react'
import * as S from './simpleModal.styles'
import { useOutsideClick } from '../../hooks/OutsideClick/OutsideClick'
import { useKeyDown } from '../../hooks/KeyDown/KeyDown'

type Props = {
    children?: React.ReactNode
    onClose: any
    isOpen: boolean
}
const SimpleModal: FC<Props> = ({ isOpen, onClose, children }) => {
    const onWrapperClick = (event: { target: { classList: { contains: (arg0: string) => any } } }) => {
        if (event.target.classList.contains('modal-wrapper')) onClose()
    }

    const wrapperRef = useRef(null)

    useOutsideClick(wrapperRef, (isOpen) => {
        if (!isOpen) {
            onClose()
        }
    })
    const escFunction = useCallback((event: { key: string }) => {
        if (event.key === 'Escape') {
            if (!isOpen) {
                onClose()
            }
            //@see Do whatever when esc is pressed
        }
    }, [])

    useKeyDown(escFunction)

    return (
        <>{
            isOpen && (<S.Modal>
                <S.ContentWrapper ref={wrapperRef} onClick={onWrapperClick}>
                    <S.Content onClick={onClose}>
                        {children}
                    </S.Content>
                </S.ContentWrapper>
            </S.Modal>)
        }</>
    )
}
export default SimpleModal