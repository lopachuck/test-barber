import styled from 'styled-components'

import { PageWrapper } from '../../pages/Page/page.styles'
import { Link } from 'react-router-dom'
import { WorkTime } from '../../pages/Contacts/contacts.styles'
import { GalleryTitle } from '../GalleryHome/galleryHome.styles'

export const Localization = styled(PageWrapper)`
    padding-top: 100px;
    padding-bottom: 100px;

    & > div {
        display: flex;
        justify-content: space-between;
        padding-bottom: 40px;
    }
`
export const Address = styled(Link)`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;

    &:before {
        content: url("/svg/icons/location.svg");
    }
`

export const LocalizationTitle = styled(GalleryTitle)`
    color: ${({ theme }) => theme.colors.white};
    padding-bottom: 16px;
`
export const LocalizationWorkTime = styled(WorkTime)`
    display: flex;
    align-items: flex-end;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
    padding-bottom: 0;

    &:before {
        content: url("/svg/icons/time.svg");
        width: 32px;
        height: 32px;
    }
`