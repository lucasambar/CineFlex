import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Cards ({foto,id}) {

    return (
        <Link to={`/sessoes/${id}`}>
            <Card data-identifier="movie-outdoor" >
                <img src={foto} alt="poster filme"/>
            </Card>
        </Link>

    )
}

const Card = styled.div`
    height: 209px;
    width: 145px;
    border-radius: 3px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px #0000001A;

    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;

    img {
        height: 193px;
        width: 129px;
    }

`