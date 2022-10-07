import styled from "styled-components"

export default function Legenda () {
    return (
        <ExempContainer>
            <Exemp cor="#1AAE9E" borda="#0E7D71"><div/>Selecionado</Exemp>
            <Exemp cor="#C3CFD9" borda="#7B8B99"><div/>Disponível</Exemp>
            <Exemp cor="#FBE192" borda="#F7C52B"><div/>Indisponível</Exemp>
        </ExempContainer>
    )
}

const ExempContainer = styled.div`
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