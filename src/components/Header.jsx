import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.div`{
    display:flex;
    gap: 20px;
    justify-content:center;
    background-color: coral;

    a{
        text-decoration:none;
        color:white;
        padding:30px;
        font-size:25px;
    }

}`
export const Header = () =>{
    return(
        <HeaderStyled>
        <Link to='/cart'>Cart</Link>
        <Link to='/'>Store</Link>
        </HeaderStyled>
    )
}