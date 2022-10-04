import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

import Cards from "./Cards"


export default function TelaInicial () {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        let promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promise.then((res) => setFilmes(res.data))
        promise.catch((err) => console.log(err.response.data))
    },[])   

    return (
        <>
            <Texto>Selecione o filme</Texto>
            <ContainerFilmes>
                {filmes.map((a) => <Cards foto={a.posterURL} key={a.id}/>)}
            </ContainerFilmes>
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
const ContainerFilmes = styled.div`
    width: 320px;
    background-color: #FFFFFF;

    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    margin: auto;
`