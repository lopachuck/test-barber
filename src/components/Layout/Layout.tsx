import React from 'react'
import Footer from '../../layouts/Footer/footer'
import { Outlet } from 'react-router-dom'

import Container from '../../layouts/container/container'
import Header from '../../layouts/Header/header'

type LayoutProps = {
    hideBg?: boolean
}

const Layout: React.FC<LayoutProps> = ({ hideBg = true }) => {
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
                    <Header />
                    <Outlet />
                    <Footer />
                </>
            )}
        </>)
}
export default Layout
