import { FC } from 'react'
import * as S from './simpleModal.styles'

type Props = {
    children?: React.ReactNode
    onClose: any
    isOpen: boolean
}
const SimpleModal: FC<Props> = ({ isOpen, onClose, children }) => {
    const onWrapperClick = (event: { target: { classList: { contains: (arg0: string) => any } } }) => {
        if (event.target.classList.contains('modal-wrapper')) onClose()
    }
    return (
        <>{
            isOpen && (<S.Modal>
                <S.ContentWrapper onClick={onWrapperClick}>
                    <S.Content onClick={onClose}>
                        {children}
                    </S.Content>
                </S.ContentWrapper>
            </S.Modal>)
        }</>
    )
}
export default SimpleModal