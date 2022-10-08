import { useState } from "react"
import styled from "styled-components"

export default function Assento ({num, selecionados, setSelecionados}) {  
    const [select,setSelect] = useState(false)
    
    function selecionar (num) {
        if (!select) {
            setSelect(true)
            let arr = selecionados
            setSelecionados([...arr, num])
        }

        if (select) {
            setSelect(false)
            let arr = selecionados.filter((a) => (a !== num))
            setSelecionados([...arr])
        }
    }

    return (
        <Div select={select} onClick={()=>selecionar(num)} data-identifier="seat">{num}</Div>
    )
}

const Div = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 12px;
    border: 1px solid ${props => props.select? "#0E7D71" :"#808F9D"};
    background-color: ${props => props.select? "#1AAE9E" : "#C3CFD9"};

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