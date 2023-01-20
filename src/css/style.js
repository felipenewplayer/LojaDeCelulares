import styled from "styled-components";


export const ProductArea = styled.div`
  
    display:flex;
    flex-wrap: wrap;
    gap:50px;
    justify-content: center;
    align-items: center;
    
    div{    
        height:320px;
        width:230px;
        border: solid 1px rgb(143,193,193);
        display:flex;
        justify-content:space-between;
        flex-direction: column;
        align-items: center;
        padding:20px;
        margin-bottom:70px; 
        margin-top:30px;
        
        button
        {
            font-size:30px;
            cursor:pointer;
            background:transparent;
            border:none;
            color:crimson;
        }
    }

`
