import { FC, useEffect } from 'react'
import { IAppProps } from '../../App'
import { useTranslation } from 'react-i18next'
import { PageWrapper, Title } from '../Page/page.styles'


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
    </>
  );
};

export default Home;
