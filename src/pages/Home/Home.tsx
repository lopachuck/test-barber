import { FC, useEffect } from 'react'
import * as S from './home.styles'
import { IAppProps } from '../../App'
import { useTranslation } from 'react-i18next'


const Home: FC<IAppProps> = (props) => {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        props.setTitle(t('contacts_title'))
    }, [])
    return (
    <>
        <S.PageWrapper>
            <h1>HOME</h1>
        </S.PageWrapper>
    </>
  );
};

export default Home;
