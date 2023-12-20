import React from 'react';
import GlobalStyle from './styles/global'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Layout from "./components/Layout/Layout";

const appProps = {}
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/*<Route  path="/" element={<><h1>HOLLA</h1></>} />*/}
          <Route  path="/" element={<Layout {...appProps}/>}>
            <Route path="contacts" element={<Contacts />}/>

          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;
