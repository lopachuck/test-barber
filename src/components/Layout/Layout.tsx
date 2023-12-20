import React from 'react'
import Footer from '../../layouts/Footer/footer'
// import Menu from '../../layouts/Menu/menu'
import { Outlet } from 'react-router-dom'

import Container from '../../layouts/container/container'
// import Header, { IHeader } from '../../layouts/Header/header'
// import { Main } from '../../layouts/ui-kit/ui-kit.styles'
import Header from "../../layouts/Header/header";
import Contacts from "../../pages/Contacts/Contacts";


const Layout: React.FC = (props, context) => {
    return (
        <>
            <Header {...props} />
            <div>
                <Container>
                    <Outlet />
                </Container>
            </div>
            <Footer />
        </>
    )
}
export default Layout