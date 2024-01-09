import { FC, useEffect } from 'react'
import { IAppProps } from '../../App'
import { useTranslation } from 'react-i18next'
import { PageWrapper, Title } from '../Page/page.styles'
import * as S from './home.styles'
import dataSVG from '../../assets/svg/banner/Animation.svg'


const Home: FC<IAppProps> = (props) => {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        props.setTitle(t('home'))
    }, [])
    return (
    <>
        <PageWrapper>
            <Title>{t('home')}</Title>
            
            
        </PageWrapper>
        <S.AboutUs>
            <S.BrendAnimation type="image/svg+xml" data={dataSVG}/>
            <S.BrendAnimation type="image/svg+xml" data={dataSVG}/>
        </S.AboutUs>
    </>
  );
};

export default Home;
