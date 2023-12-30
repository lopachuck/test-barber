import styled from 'styled-components'
import { devices } from '../../devices'
import {Link} from "react-router-dom";

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 314px;
    
`
export const InfoWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    //gap: 275px;
    padding: 43px 0;
    height: 206px;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.elementsGrey};
    border-bottom: 1px solid ${({ theme }) => theme.colors.elementsGrey};
`
export const SocialWrapper = styled.div`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    &>span{
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }
`
export const SocialIconWrapper = styled.div``
export const InfoTitle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    padding-bottom: 12px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
`
export const SocialIcon = styled(Link)`
    width: 32px;
    margin-right: 16px;
`
export const Logo = styled.img``
export const ContactsWrapper = styled.div`
`
export const ContactsDetails = styled.div`
    color: ${({ theme }) => theme.colors.textSecondary};
    /* Caption */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`
export const Address = styled.div``
export const Phone = styled.div``
export const Mail = styled.div``
export const CopyrightWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const CopyrightText = styled.span`
    color: ${({ theme }) => theme.colors.textSecondary};
    /* Caption */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding-top: 36px;
    padding-bottom: 100px;
`
