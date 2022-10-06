import  styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyle from './GlobalStyle'
import Header from './Componentes/Header'
import TelaInicial from './Componentes/TelaInicial/TelaInicial'
import TelaHorários from './Componentes/TelaHorários/TelaHorários'
import TelaAssentos from './Componentes/TelaAssentos/TelaAssentos'


export default function App () {
    
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Background>
                <Header/>
                <Routes>
                    <Route path="/" element={<TelaInicial />} />
                    <Route path="/sessoes/:sessaoId" element={<TelaHorários />} />
                    <Route path="/assentos/:assentoId" element={<TelaAssentos />} />
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