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
import Gallery from './pages/Gallery/Gallery'
import Shop from './pages/Shop/Shop'
import { useTranslation } from 'react-i18next'
import NotFound from './pages/NotFound/NotFound'

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
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout hideBg={false} />}>
                        <Route path="/" index element={<Home {...appProps} />} />
                        <Route path="shop" element={<Shop {...appProps} />} />
                    </Route>
                    <Route path="/" element={<Layout/>}>
                        <Route path="gallery" element={<Gallery {...appProps} />}/>
                        <Route path="services" element={<Services {...appProps} />}/>
                        <Route path="contacts" element={<Contacts {...appProps} />}/>
                        <Route path="barbers" element={<Barbers/>}/>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}
export default App
