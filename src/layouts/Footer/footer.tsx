import { FC, useState } from 'react'
import * as S from './footer.styles'

const Footer: FC = () => {
    return (
        <>
            <S.FooterWrapper>
                <S.InfoWrapper>
                    <S.SocialWrapper></S.SocialWrapper>
                    <S.Logo/>
                    <S.AddressWrapper/>
                </S.InfoWrapper>
                <S.CopyrightWrapper></S.CopyrightWrapper>
            </S.FooterWrapper>
        </>
    )
}

export default Footer
