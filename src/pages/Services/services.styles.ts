import styled from 'styled-components'
export const PageTitle = styled.h1`
    display: block;
    margin-top: 60px;
    text-align: center;
    color: #fff;

    /* Headline1 */
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 120% */
    letter-spacing: -0.8px;
`
export const Services = styled.article`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px; 
`

export const Service = styled.section`
    display: flex;
    width: 72.5rem;
    padding: 1.25rem;
    justify-content: space-between;
    align-items: center;
    
    border-radius: 2rem;
    border: 1px solid #6B6B6B;
    background: #1D1D22;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
export const Pictures = styled.picture`
    width: 6rem;
    height: 6rem;
    flex-shrink: 0;

    &>img{
        border-radius: 12px;
        border: 1px solid #6B6B6B;
    }
    
`
export const DescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    width: 585px;
`
export const Title = styled.div`
    color: #FFF;

    /* Headline2 */
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 100% */
    letter-spacing: -0.64px;
`
export const Description = styled.div`
    color: #ABABAB;

    /* Caption */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`
export const PriceBlock = styled.div`
    display: flex;
    flex-direction: column;
`
export const Price = styled.div`
    color: #FFF;

    /* Headline2 */
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 100% */
    letter-spacing: -0.64px;
`

export const Duration = styled.div`
    color: #ABABAB;

    /* Caption */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`

export const BtnBlock = styled.div`
    display: flex;
`

