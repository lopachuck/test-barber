import React from 'react';
import GlobalStyle from './styles/global'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Layout from "./components/Layout/Layout";
import { ThemeContext } from 'styled-components'
import {darkTheme} from "./theme";
import Barbers from "./pages/Barbers/Barbers";

export interface IAppProps {
    setTitle: any
}



const App: React.FC = () => {
  return (
      <ThemeContext.Provider value={darkTheme}>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'}/>
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          />
          <GlobalStyle/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route path="contacts" element={<Contacts/>}/>
                      <Route path="barbers" element={<Barbers/>}/>
                  </Route>
              
              </Routes>
          </BrowserRouter>
      </ThemeContext.Provider>
  )
}
export default App;
