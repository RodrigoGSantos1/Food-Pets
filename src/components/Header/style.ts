import styled from "styled-components";

export const Headers = styled.header`
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 60px;
    background-color: white;
    border-radius: 0 0 30px 30px;
    padding: 0 30px 0 30px;

    img{
        width: 4%;
    }
`

export const Topcs = styled.a`
    padding: 5px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
`

export const ButtonHeader = styled.div`
    background-color: #FF914D;
    display: flex;
    align-items: center;

    color: white;
    padding: 10px;
    border-radius: 20px;
    /* font-weight: bold; */
    font-size: 12px;

`

export const Login = styled.a` 
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Name = styled.p`
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FF914D;
` 