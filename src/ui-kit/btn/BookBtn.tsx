import { FC } from 'react'
import * as S from './bookBtn.styles'

const BookBtnExample: FC = (to) => {
    return (
        <>
            <S.BookBtn to={to}></S.BookBtn>
        </>
    )
}
export default BookBtnExample