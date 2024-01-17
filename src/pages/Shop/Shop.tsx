import { FC, useEffect } from 'react'
import * as S from './shop.styles'
import { useTranslation } from 'react-i18next'
import { IAppProps } from '../../App'
import LogoLine from "../../components/LogoLine/LogoLine";

const Shop: FC<IAppProps> = (props) => {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        props.setTitle(t('header_menu_shop'))
    }, [])
    return (
        <>
            <S.BgImage>
                <S.ShopPageWrapper>
                    <S.ShopTitle>{t('coming_soon')}</S.ShopTitle>
                </S.ShopPageWrapper>
                <LogoLine/>
            </S.BgImage>
        </>
    )
}
export default Shop