import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"


export default function Formulario ({selecionados, dados, setDados}) {
    const [nome,setNome] = useState("")
    const [cpf, setCpf] = useState("")

    function enviar (event) {
        event.preventDefault()

        let obj = {
            ids: selecionados,
            name: nome,
            cpf: cpf,
        }
        let promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",obj)
        promisse.then((a) => console.log(a.data))
        promisse.catch((a) => console.log(a))
    }

    let obj2 = dados
    obj2.nome = nome
    obj2.cpf = cpf
    obj2.assentos = selecionados
    setDados(obj2)
    
    return (
        <Form onSubmit={enviar}>
            <div>
                <Label htmlFor="nome">Nome do comprador</Label>
                <Input type="text" id="nome" placeholder="Insira o seu nome..." value={nome} onChange={(e) => setNome(e.target.value)} required/>
            </div>

            <div>
                <Label htmlFor="cpf">CPF do comprador</Label>
                <Input type="text" id="cpf" placeholder="Insira o seu CPF..." value={cpf} onChange={(e) => setCpf(e.target.value)} required/>
            </div>

            <Link to="/sucesso">
                <Button type="submit">Reservar assento(s)</Button>
            </Link>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: auto;
    margin-top: 36px;

    div{
        margin-top: 10px;
    }
`
const Label = styled.label`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #293845;

    display: block;
    height: 25px;
    width: 327px;
`
const Input = styled.input`
    height: 51px;
    width: 327px;
    border-radius: 3px;
    background-color: #FFFFFF;
    border: 1px solid #D4D4D4;

    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #293845;

    padding-left: 18px;

    &::placeholder {
        font-family: Roboto;
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        color: #AFAFAF;
    }

`
const Button = styled.button`
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

    margin-top: 45px;
`