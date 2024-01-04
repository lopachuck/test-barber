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
            <PageTitle>{t('title_page_home')}</PageTitle>
            <PageSubtitle>{t('home_subtitle')}</PageSubtitle>
        </S.HomePageWrapper>
    </>
  );
};

export default Home;
