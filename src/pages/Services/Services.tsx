import React, { FC } from 'react'
import * as S from './services.styles'
import { BookingBtn } from '../../ui-kit/btn/bookBtn.styles'
import { IAppProps } from '../../App'
import {PageWrapper} from "../Contacts/contacts.styles";

const Services: FC<IAppProps> = (props) => {
    return (
        <>
            <PageWrapper>
                <S.PageTitle>OUR SERVICES</S.PageTitle>
                <S.Services>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <img src="/img/services/hair-cut.jpg" alt="Men's haircut" />
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.Title>Men's haircut</S.Title>
                                <S.Description>Includes haircut with scissors/clippers, hair washing and professional
                                    styling.</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>30 €</S.Price>
                                <S.Duration>60 min</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={'#'}>
                                <span>BOOK</span>
                                <p>BOOK</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <img src="/img/services/hair-cut.jpg" alt="Men's haircut" />
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.Title>Men's haircut</S.Title>
                                <S.Description>Includes haircut with scissors/clippers, hair washing and professional
                                    styling.</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>30 €</S.Price>
                                <S.Duration>60 min</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={'#'}>
                                <span>BOOK</span>
                                <p>BOOK</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <img src="/img/services/hair-cut.jpg" alt="Men's haircut" />
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.Title>Men's haircut</S.Title>
                                <S.Description>Includes haircut with scissors/clippers, hair washing and professional
                                    styling.</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>30 €</S.Price>
                                <S.Duration>60 min</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={'#'}>
                                <span>BOOK</span>
                                <p>BOOK</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <img src="/img/services/hair-cut.jpg" alt="Men's haircut" />
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.Title>Men's haircut</S.Title>
                                <S.Description>Includes haircut with scissors/clippers, hair washing and professional
                                    styling.</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>30 €</S.Price>
                                <S.Duration>60 min</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={'#'}>
                                <span>BOOK</span>
                                <p>BOOK</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <img src="/img/services/hair-cut.jpg" alt="Men's haircut" />
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.Title>Men's haircut</S.Title>
                                <S.Description>Includes haircut with scissors/clippers, hair washing and professional
                                    styling.</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>30 €</S.Price>
                                <S.Duration>60 min</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={'#'}>
                                <span>BOOK</span>
                                <p>BOOK</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <img src="/img/services/hair-cut.jpg" alt="Men's haircut" />
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.Title>Men's haircut</S.Title>
                                <S.Description>Includes haircut with scissors/clippers, hair washing and professional
                                    styling.</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>30 €</S.Price>
                                <S.Duration>60 min</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={'#'}>
                                <span>BOOK</span>
                                <p>BOOK</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                    <S.Service>
                        <S.ServiceInfo>
                            <S.Pictures>
                                <img src="/img/services/hair-cut.jpg" alt="Men's haircut" />
                            </S.Pictures>
                            <S.DescriptionBlock>
                                <S.Title>Father and Son</S.Title>
                                <S.Description>Haircut for Father and Son (child from 8 to 14 years old).</S.Description>
                            </S.DescriptionBlock>
                        </S.ServiceInfo>
                        <S.BtnBlock>
                            <S.PriceBlock>
                                <S.Price>40 €</S.Price>
                                <S.Duration>1 h 15 min</S.Duration>
                            </S.PriceBlock>
                            <BookingBtn to={'#'}>
                                <span>BOOK</span>
                                <p>BOOK</p>
                            </BookingBtn>
                        </S.BtnBlock>
                    </S.Service>
                </S.Services>
            </PageWrapper>
            
        </>
    )
}
export default Services