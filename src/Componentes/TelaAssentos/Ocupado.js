import styled from "styled-components"

export default function Ocupado ({num}) {  
    return (
        <Div onClick={() => alert("Esse assento não está disponível.")}>{num}</Div>
    )
}

const Div = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 12px;
    border: 1px solid #F7C52B;
    background-color: #FBE192;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 13px;

    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #000000;
`