import {FC, useEffect} from 'react';
import {IAppProps} from "../../App";
import * as S from "./contacts.styles"

const Contacts: FC = () => {
  return (
    <>
        <S.PageWrapper>
            <S.PageTitle>Contacts</S.PageTitle>
            <S.PageInfoWrapper>
                <S.ContactInfo>
                    <a href={'#'} >
                        <img src={"/svg/icons/location.svg"} alt="loc"/>
                        <span>Fr.R.Kreutzwaldi 7, 10126 Tallinn</span>
                    </a>
                    <S.WorkTime>
                        <img src={"/svg/icons/time.svg"} alt="loc"/>
                        <span>Mon-Fri  10:00 - 20:00 <br/>Sat 10:00 - 19:00, Sun 10:00 - 16:00</span>
                    </S.WorkTime>
                    <a href={''} >
                        <img src={"/svg/icons/phone.svg"} alt="loc"/>
                        <span>+37258365820</span>
                    </a>
                    <a href={''} >
                        <img src={"/svg/icons/letter.svg"} alt="loc"/>
                        <span>unclevebarbershop@gmail.com</span>
                    </a>
                </S.ContactInfo>
                <S.SocialLinks></S.SocialLinks>
            </S.PageInfoWrapper>
            <S.MapWrapper></S.MapWrapper>
        </S.PageWrapper>
    </>
  );
};

export default Contacts;
