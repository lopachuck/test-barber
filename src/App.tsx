import React from 'react';
import GlobalStyle from './styles/global'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Layout from "./components/Layout/Layout";

export interface IAppProps {
    setTitle: any
}



const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Layout />}>
            <Route path="contacts" element={<Contacts  />}/>
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;
