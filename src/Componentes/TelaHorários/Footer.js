import styled from "styled-components"

export default function Footer ({nome,poster}) {
    return (
        <Foot>
            <Imagem data-identifier="movie-img-preview"><img src={poster} alt=""/></Imagem>
            <div data-identifier="movie-and-session-infos-preview">
                <Texto>{nome}</Texto>
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
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #293845;

    display: block;
    background-color: #DFE6ED;
`