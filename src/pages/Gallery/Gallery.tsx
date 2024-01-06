import { FC, useEffect } from 'react'
import { IAppProps } from '../../App'
import CustomSlider from '../../ui-kit/Slider/Slider'
import { useTranslation } from 'react-i18next'
import { PageWrapper, Subtitle, Title, TitleWrapper } from '../Page/page.styles'

const Gallery: FC<IAppProps> = (props) => {
    const { t } = useTranslation()
    useEffect(() => {
        props.setTitle(t('title_page_gallery'))
    }, [])
    return (
        <>
            <PageWrapper>
                <TitleWrapper>
                    <Title>{t('title_page_gallery')}</Title>
                    <Subtitle>{t('gallery_subtitle')}</Subtitle>
                </TitleWrapper>
            </PageWrapper>
            <CustomSlider />
        </>
    )
}

export default Gallery