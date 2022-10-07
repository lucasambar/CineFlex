import styled from "styled-components"
import { useEffect } from "react"

export default function Footer2 ({filme, dia, hora, setFilme}) {

    useEffect(() => {
            let obj ={
            nome: filme.title,
            dia: dia.date,
            hora: hora,
        }
        setFilme(obj)
    },[filme, dia, hora, setFilme])
    
    return (
        <Foot>
            <Imagem><img src={filme.posterURL} alt=""/></Imagem>
            <div>
                <Texto>{`${dia.weekday} - ${hora}`}</Texto>
                <Texto>{filme.title}</Texto>
            </div>
        </Foot>
    )
}

const Foot = styled.div`
    height: 117px;
    width: 375px;
    background-color: #DFE6ED;

    display: flex;
    align-items: center;

    position: fixed;
    left: 0;
    bottom: 0;

    div{
        display: flex;
        flex-direction: column;

    }
`
const Imagem = styled.div`
    height: 89px;
    width: 64px;
    border-radius: 2px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px #0000001A;

    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-left: 12px;
    margin-right: 20px;

    img {
        height: 72px;
        width: 48px;
    }
`
const Texto = styled.p`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #293845;

    display: block;
    background-color: #DFE6ED;
`