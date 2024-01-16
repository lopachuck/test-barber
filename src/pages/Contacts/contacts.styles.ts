import styled from 'styled-components'
import { devices } from '../../devices'
import IconTime from '../../assets/icon/contacts/time.svg'
import IconLocation from '../../assets/icon/contacts/location.svg'
import IconMail from '../../assets/icon/contacts/letter.svg'
import IconPhone from '../../assets/icon/contacts/phone.svg'
import { Link } from 'react-router-dom'

export const ContactInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media ${devices.xs} {
        flex-direction: column;
    }
`
export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 700;

    & > span,
    & > a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        display: flex;
        align-items: center;
        padding-bottom: 12px;
        & > img {
            padding-right: 8px;
        }
    }
    & > span:before{
        content: " ";
        width: 32px;
        height: 32px;
        background-image: url(${IconLocation});
        padding-right: 8px;
        background-repeat: no-repeat;
    }
    @media ${devices.xs} {
        order: 2;
    }
`
export const WorkTime = styled.div`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    padding-bottom: 12px;
    & > img {
        padding-right: 8px;
    }
    & > div > span, & > div > p {
        white-space: nowrap;
    }
    &:before{
        content: " ";
        width: 32px;
        height: 32px;
        background-image: url(${IconTime});
        padding-right: 8px;
        background-repeat: no-repeat;
    }
`
export const ContactsSocialWrapper = styled.div`
    display: flex;
    gap: 24px;
    color:  ${({ theme }) => theme.colors.white};
    text-align: right;
    /* Headline4 */
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
    flex-direction: column;
    @media ${devices.xs} {
        order: 1;
        align-items: center;
        margin-bottom: 40px;
    }

    & div {
        flex-direction: row;
        justify-content: end;
    }
`

export const ContactsPhoneLink = styled(Link)`
    &:before {
        content: " ";
        width: 32px;
        height: 32px;
        background-image: url(${IconPhone});
        padding-right: 8px;
        background-repeat: no-repeat;
    }
`
export const ContactsMailLink = styled(ContactsPhoneLink)`
    &:before{
        background-image: url(${IconMail});
    }
`
export const MapWrapper = styled.div`
    padding-bottom: 60px;
    padding-top: 44px;
`