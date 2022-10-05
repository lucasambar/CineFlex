import  styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyle from './GlobalStyle'
import Header from './Componentes/Header'
import TelaInicial from './Componentes/Telas/TelaInicial'

export default function App () {
        
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Background>
                <Header/>
                <Routes>
                    <Route path="/" element={<TelaInicial/>} />
                </Routes>
            </Background>
        </BrowserRouter>
    )
}

const Background = styled.div`
    width: 375px;
    height: 100%;
    background-color: #FFFFFF;
    padding-bottom: 10px;
`