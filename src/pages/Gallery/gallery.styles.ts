import styled from "styled-components";
import {PageWrapper} from "../Contacts/contacts.styles";
import {BarbersInfo, PageSubtitle, PageTitle, PageTitleWrapper} from "../Barbers/barbers.styles";
import {devices} from "../../devices";

export const GalleryPage = styled(PageWrapper)``
export const GalleryTitleWrapper = styled(PageTitleWrapper)`
`
export const GalleryTitle = styled(PageTitle)`
    @media ${devices.lg} {
        padding-top: 40px;
    }
`
export const GallerySubTitle = styled(PageSubtitle)``
export const GalleryWrapper = styled(BarbersInfo)``
