import  styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import GlobalStyle from './GlobalStyle'
import Header from './Componentes/Header'
import TelaInicial from './Componentes/TelaInicial/TelaInicial'
import TelaHorários from './Componentes/TelaHorários/TelaHorários'
import TelaAssentos from './Componentes/TelaAssentos/TelaAssentos'
import TelaSucesso from "./Componentes/TelaSucesso"


export default function App () {
    const [dados, setDados] = useState({})
    const [filme, setFilme] = useState({})

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Background>
                <Header/>
                <Routes>
                    <Route path="/" element={<TelaInicial />} />
                    <Route path="/sessoes/:sessaoId" element={<TelaHorários />} />
                    <Route path="/assentos/:assentoId" element={<TelaAssentos setDados={setDados} setFilme={setFilme}/>} />
                    <Route path="/sucesso" element={<TelaSucesso dados={dados} filmma={filme}/>}/>
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