import {FC, useEffect} from 'react';
import * as S from "./home.styles"
import {t} from "../../utils/translate/t";
import {IAppProps} from "../../App";


const Home: FC<IAppProps> = (props) => {
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
