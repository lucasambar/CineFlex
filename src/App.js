import  styled from 'styled-components'
import GlobalStyle from './GlobalStyle'

import Header from './Componentes/Header'
import TelaInicial from './Componentes/TelaInicial'

export default function App () {
   
    return (
        <>
            <GlobalStyle/>
            <Background>
                <Header/>
                <TelaInicial/>
            </Background>
        </>
    )
}

const Background = styled.div`
    width: 375px;
    height: 100%;
    background-color: #FFFFFF;
    padding-bottom: 10px;
`