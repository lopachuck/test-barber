import React, { useState } from 'react'
import GlobalStyle from './styles/global'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacts from './pages/Contacts/Contacts'
import Layout from './components/Layout/Layout'
import { ThemeContext } from 'styled-components'
import { darkTheme } from './theme'
import Barbers from './pages/Barbers/Barbers'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Shop from './pages/Shop/Shop'
import { useTranslation } from 'react-i18next'

export interface IAppProps {
    setTitle: any
}

const App: React.FC = () => {
    const { t } = useTranslation()
    const [title, setTitle] = useState(t('home'))
    const appProps = {
        title,
        setTitle,
    }
    return (
        <ThemeContext.Provider value={darkTheme}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
            />
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" index element={<Home {...appProps} />} />
                        <Route path="gallery" element={<Home {...appProps} />} />
                        <Route path="services" element={<Services {...appProps} />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="contacts" element={<Contacts {...appProps} />} />
                        <Route path="barbers" element={<Barbers />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}
export default App
