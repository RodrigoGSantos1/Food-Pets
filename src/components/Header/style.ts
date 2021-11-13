import styled from "styled-components";

export const Headers = styled.header`
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 90px;
    background-color: white;
    border-radius: 0 0 30px 30px;
    padding: 0 30px 0 30px;

    img{
        width: 75px;
    }
`

export const Topcs = styled.a`
    padding: 5px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
`

export const ButtonHeader = styled.button`
    background-color: #FF914D;
    display: flex;
    align-items: center;

    color: white;
    padding: 10px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 12px;

`