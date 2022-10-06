import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer";
import Sessoes from "./Sessoes";


export default function TelaHorários () {
    const {sessaoId} = useParams()
    const [dados,setDados] = useState([])
    const [dias,setDias] = useState([])

    useEffect(() => {
        let promessa = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${sessaoId}/showtimes`)

        promessa.then((a) => {
            setDados(a.data)
            setDias(a.data.days)})
        promessa.catch((a) => console.log(a.response.data))
    },[sessaoId])
    

    
    return (
        <>
            <Texto>Selecione o horário</Texto>
            <SessaoContainer>
                {dias.map((d) => <Sessoes data={d.date} dia={d.weekday} key={d.id} id={d.id} horarios={d.showtimes}/>)}
            </SessaoContainer>
            <Footer nome={dados.title} poster={dados.posterURL}/>
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
const SessaoContainer = styled.div`
    width: 100%;
`