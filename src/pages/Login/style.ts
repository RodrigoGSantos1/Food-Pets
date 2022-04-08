import styled from "styled-components";

export const Style = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #ccc;
`

export const AreaIcon = styled.div`
    width: 50%;
    height: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    .img-fundo{
        width: 100%;
        height: 100%;
        opacity: 0.5;
    }
    .img-logo{
        position: absolute;
        width: 15%;
    }
`

export const AreaForm = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        background-color: #fff;
        width: 85%;
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 0.3rem;
        margin-top: 3rem;
        overflow-y: auto;

        div{
            width: 80%;
            margin-bottom: 10px;
        }

        h1{
            color: #00A19C;
            margin-bottom: 50px;
        }
    }
    
`

export const ButtonCadastro = styled.button`
    margin-top: 50px;
    background-color: #FF914D;
    font-weight: bold;
    width: 30%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: white;
    padding: 10px;
    border-radius: 20px;
    font-size: 15px;
    /* box-shadow: 10px 5px 5px black; */
`


