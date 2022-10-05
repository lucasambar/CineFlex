import styled from "styled-components"

export default function Sessoes ({data, dia, horarios}) {
    return (
        <Dia>
            <Texto>{`${dia} - ${data}`}</Texto>
            <div>
                {horarios.map((a) => <Horario key={a.id}>{a.name}</Horario>)} 
            </div>
        </Dia>
    )
}

const Dia = styled.div`
    height: 90px;
    width: 327px;
    margin: auto;
    margin-bottom: 10px;

    div {
        height: 70px;
        width: 327px;

        display: flex;
        align-items: center;

        padding: 10px;
        gap: 10px;
    }
`
const Texto = styled.p`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #293845;

    display: block;
    padding-left: 5px;
`
const Horario = styled.button`
    height: 43px;
    width: 83px;
    border-radius: 3px;
    background-color: #E8833A;
    border: none;
    cursor: pointer;

    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #FFFFFF;

`