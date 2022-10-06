import styled from "styled-components"

export default function Assento ({num, livre}) {
    
    return (
        <Div cor={livre}>{num}</Div>
    )
}

const Div = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 12px;
    border: 1px solid #808F9D;
    background-color: ${props => (props.cor)};

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 13px;

    cursor: pointer;

    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #000000;
`