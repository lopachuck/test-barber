import React from 'react'
import Footer from '../../layouts/Footer/footer'
import { Outlet } from 'react-router-dom'

import Container from '../../layouts/container/container'
import Header from '../../layouts/Header/header'
import { BgImage } from '../../pages/Page/page.styles'

type LayoutProps = {
    hideBg?: boolean
    img?: string
}

const Layout: React.FC<LayoutProps> = ({ img = null, hideBg = true }) => {
    return (
        <>
            {hideBg ? (
                <>
                    <Header hideBG={hideBg} />
                    <Container>
                        <Outlet />
                    </Container>
                    <Footer />
                </>
            ) : (
                <>
                    <BgImage img={img}>
                        <Header />
                        <Container>
                            <Outlet />
                        </Container>
                        <Footer />
                    </BgImage>
                </>
            )}
        </>)
}
export default Layout
