import styled from "styled-components"
import { Link } from "react-router-dom"

export default function TelaSucesso ({dados, filme}) {
    console.log(filme, dados)

    return (
        <>
            <Texto>Pedido feito com sucesso!</Texto>

            <CaixaInfo>
                <div>
                    <Titulo>Filme e sessão</Titulo>
                    <Subtitulo>{filme.nome}</Subtitulo>
                    <Subtitulo>{`${filme.dia} ${filme.hora}`}</Subtitulo>
                </div>

                <div>
                    <Titulo>Ingressos</Titulo>
                    {dados.assentos.map((a) => <Subtitulo key={a}>Assento {a}</Subtitulo>)}
                </div>

                <div>
                    <Titulo>Comprador</Titulo>
                    <Subtitulo>{dados.nome}</Subtitulo>
                    <Subtitulo>{dados.cpf}</Subtitulo>
                </div>
            </CaixaInfo>

            <Link to="/"><Botao>Voltar para home</Botao></Link>
        </>
    )
}

const Texto = styled.div`
        height: 110px;
        width: 374px;
        background-color: #FFFFFF;
        
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #247A6B;
        
        display: flex;
        justify-content: center;
        align-items: center;
`
const CaixaInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
`
const Titulo = styled.div`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: left;
    color: #293845;

    width: 100%;
    padding-left: 30px;
    margin-bottom: 10px;
`
const Subtitulo = styled.div`
    font-family: Roboto;
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.04em;
    text-align: left;
    color: #293845;

    width: 100%;
    padding-left: 30px;
`
const Botao = styled.div`
    height: 42px;
    width: 225px;
    border-radius: 3px;
    border: none;
    background-color: #E8833A;

    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.04em;
    text-align: center;
    color:#FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: auto;
    margin-top: 35px;
`