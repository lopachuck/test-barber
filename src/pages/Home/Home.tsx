import { FC, useEffect } from 'react'
import { IAppProps } from '../../App'
import { useTranslation } from 'react-i18next'
import { PageWrapper } from '../Page/page.styles'
import * as S from './home.styles'

const Home: FC<IAppProps> = (props) => {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        props.setTitle(t('home'))
    }, [])
    return (
        <>
            <PageWrapper>
                <S.HomeTitleWrapper>
                    <S.HomeTitle>{t('title_page_home')}</S.HomeTitle>
                    <S.HomeSubtitle>{t('home_subtitle')}</S.HomeSubtitle>
                </S.HomeTitleWrapper>
            </PageWrapper>
            <S.LogoLine></S.LogoLine>
        </>
    )
}

export default Home
