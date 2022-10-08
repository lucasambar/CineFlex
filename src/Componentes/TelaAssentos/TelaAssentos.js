import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

import Assento from "./Assento"
import Footer2 from "./Footer2"
import Formulario from "./Formulario"
import Legenda from "./Legenda"
import Ocupado from "./Ocupado"


export default function TelaAssentos ({dados, setDados, filme, setFilme}) {
    const {assentoId} = useParams()

    const [movie, setMovie] = useState([])
    const [day, setDay] = useState([])
    const [hora, setHora] = useState("")
    const [seats, setSeats] = useState([])
    const [selecionados, setSelecionados] = useState([])


    useEffect(() => {
        let promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${assentoId}/seats`)
        promisse.then((a) => {
            setMovie(a.data.movie)
            setDay(a.data.day)
            setHora(a.data.name)
            setSeats(a.data.seats)
        })
        promisse.catch((a) => console.log(a.response.data))
    },[assentoId])

    let obj = filme
    obj.dia = day.date
    obj.hora = hora
    obj.nome = movie.title
    setFilme(obj)

    return (
        <>
            <Texto>Selecione o(s) assento(s)</Texto>

            <ContainerAssentos>
                {seats.map((a) => a.isAvailable ? <Assento key={a.id} num={a.name} selecionados={selecionados} setSelecionados={setSelecionados}/>
                :<Ocupado num={a.name} key={a.id}/>)}
            </ContainerAssentos>

            <Legenda/>

            <Formulario selecionados={selecionados} dados={dados} setDados={setDados}/>

            <Footer2 filme={movie} dia={day} hora={hora} setFilme={setFilme}/> 
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
const Espaço = styled.div`
    height: 117px;
    width: 375px;
`
