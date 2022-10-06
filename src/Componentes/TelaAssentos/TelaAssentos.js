import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

import Assento from "./Aseento"
import Footer from "./Footer2"


export default function TelaAssentos () {
    const {assentoId} = useParams()

    const [movie, setMovie] = useState([])
    const [day, setDay] = useState([])
    const [hora, setHora] = useState("")
    const [seats, setSeats] = useState([])

    useEffect(() => {
        let promisse = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${assentoId}/seats`)
        promisse.then((a) => {
            setMovie(a.data.movie)
            setDay(a.data.day)
            setHora(a.data.name)
            setSeats(a.data.seats)
        })
        promisse.catch((a) => console.log(a.response.data))
    },[assentoId])

    console.log(seats)

    return (
        <>
            <Texto>Selecione o(s) assento(s)</Texto>

            <ContainerAssentos>
                {seats.map((a) => <Assento key={a.id} num={a.name} livre={a.isAvaible} />)}
            </ContainerAssentos>

            <Legenda>
                <Exemp cor="#1AAE9E" borda="#0E7D71"><div/>Selecionado</Exemp>
                <Exemp cor="#C3CFD9" borda="#7B8B99"><div/>Disponível</Exemp>
                <Exemp cor="#FBE192" borda="#F7C52B"><div/>Indisponível</Exemp>
            </Legenda>

            {/* formulário do bônus */}

            <Footer filme={movie} dia={day} hora={hora}/> 

            <Tela><Reservar>Reservar assentos</Reservar></Tela>
            <Espaço/>
        </>
    )
}

const Texto = styled.div`
        height: 110px;
        width: 374px;
        background-color: #FFFFFF;

        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #293845;
        
        display: flex;
        justify-content: center;
        align-items: center;
`
const ContainerAssentos = styled.div`
    width: 327px;

    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    
    margin: auto;
`
const Legenda = styled.div`
    width: 270px;

    display: flex;
    justify-content: space-between;
    margin: auto;
`
const Exemp = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-family: Roboto;
        font-size: 13px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: -0.013em;
        text-align: left;
        color: #4E5A65;

    div{
        height: 26px;
        width: 26px;
        border-radius: 12px;
        border: 1px solid ${props => props.borda};
        background-color: ${props => (props.cor)};

        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 6px;
    }


`
const Reservar = styled.button`
    height: 42px;
    width: 225px;
    border-radius: 3px;
    background-color: #E8833A;
    border: none;

    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #FFFFFF;

    cursor: pointer;

    margin-top: 60px;
`
const Espaço = styled.div`
    height: 117px;
    width: 375px;
`
const Tela = styled.div`
        display: flex;
        justify-content: center;
        cursor: hover;
`