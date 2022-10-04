import styled from "styled-components"

export default function Header () {
    return <Texto>CINEFLEX</Texto>
}

const Texto = styled.div`
    height: 67px;
    width: 375px;
    background-color: #C3CFD9;

    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    color: #E8833A;

    display: flex;
    align-items: center;
    justify-content: center;
`