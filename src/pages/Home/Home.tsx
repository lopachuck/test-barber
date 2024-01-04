import { FC, useEffect } from 'react'
import * as S from './home.styles'
import { IAppProps } from '../../App'
import { useTranslation } from 'react-i18next'
import {PageWrapper} from "../Shop/shop.styles";
import {PageSubtitle, PageTitle} from "../Barbers/barbers.styles";


const Home: FC<IAppProps> = (props) => {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        props.setTitle(t('contacts_title'))
    }, [])
    return (
    <>
        <S.HomePageWrapper>
            <PageTitle>{t('home_title')}</PageTitle>
            <PageSubtitle></PageSubtitle>
        </S.HomePageWrapper>
    </>
  );
};

export default Home;
