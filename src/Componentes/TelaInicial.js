import styled from "styled-components"

export default function TelaInicial () {
    return (
        <>
            <Texto>Selecione o filme</Texto>

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
