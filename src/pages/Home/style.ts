import styled from "styled-components";


export const StyleHome = styled.div`
    width: 100%;
    height: 200vh;
`

export const Section1 = styled.section`
    background-color: black;
    position: relative;
`

export const ImageHome = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.5;
`

export const TextHome = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;

    width: 100%;
    height: 85%;
    top: 0;
`
export const Title1 = styled.h1`
    color: white;
    font-size: 58px;
    font-weight: bold;
`
export const Contents1 = styled.p`
    width: 800px;
    color: white;
    font-size: 32px;
    font-weight: 100;
    text-align: center;
`
export const ButtonSec1 = styled.button`
    background-color: #E3725D;
    display: flex;
    align-items: center;

    color: white;
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    font-weight: 400;
    font-size: 42px;
`