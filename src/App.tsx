
import React, {useState} from 'react';
import GlobalStyle from './styles/global'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Layout from "./components/Layout/Layout";
import { ThemeContext } from 'styled-components'
import {darkTheme} from "./theme";
import {t} from "./utils/translate/t";

export interface IAppProps {
    setTitle: any
}

const App: React.FC = () => {
    const home = t('home')
    const [title, setTitle] = useState(home)
    const appProps = {
        title,
        setTitle,
    }
    // let a = 'skjlkj'
    let a = process.env.REACT_APP_MAP_LNG
    let b
  return (
      <ThemeContext.Provider value={darkTheme}>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'}/>
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          />
          <GlobalStyle/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route path="contacts" element={<Contacts {...appProps}/>}/>
                      <Route path="a" element={<>
                          <br/><br/><br/><br/><br/>{a}</>}/>
                  </Route>
              
              </Routes>
          </BrowserRouter>
      </ThemeContext.Provider>
  )
}
export default App;
