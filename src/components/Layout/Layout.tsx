import React from 'react'
import Footer from '../../layouts/Footer/footer'
import { Outlet } from 'react-router-dom'

import Container from '../../layouts/container/container'
import Header from '../../layouts/Header/header'


const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}
export default Layout
