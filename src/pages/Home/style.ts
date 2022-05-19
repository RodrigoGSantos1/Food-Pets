import styled from "styled-components";


export const StyleHome = styled.div`
    width: 100%;
    height: 100%;
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
    font-size: 2rem;
    font-weight: bold;
`
export const Contents1 = styled.p`
    width: 800px;
    color: white;
    font-size: 1.5rem;
    font-weight: 100;
    text-align: center;
`
export const ButtonSec1 = styled.button`
    background-color: #FF914D;
    display: flex;
    align-items: center;

    color: white;
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    font-weight: 400;
    font-size: 1.5rem;
`
export const Section2 = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    background-color: #262626;
`
export const ImgGatinho = styled.img`
    width: 30%;
`
export const TextSec2 = styled.div`
    margin: 50px;
    width: 500px;
`
export const Sobre = styled.h1`
    color: white;
    font-size: 2rem;
    font-weight: bold;
`
export const ContSec2 = styled.p`
    color: white;
    font-size: 1rem;

`
export const Section3 = styled.section`
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const AreaContetCard = styled.div`  
    width: 100%;
    height: 100%;
    /* background-color: yellow; */
    border-radius: 10px 10px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    position: relative;

    img{
        position: absolute;
        top: 0;
        width: 80%;
        border-radius: 10px;

        :hover{
            width: 85%;
        }
    }

`
export const ButtonCard = styled.button`
    position: absolute;
    bottom: 0;
    background-color: #FF914D;
    display: flex;
    align-items: center;

    color: white;
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    font-weight: 400;
    font-size: 1.5rem;
`
export const ContetCard = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 19px;
    margin-bottom: 5px;
    margin-left: 10px;
    color: #FFFFFF;

`

export const SwiperStyle = styled.div`
    width: 100vw;
    height: 70vh;


    .swiper {
        width: 95%;
        height: 80vh;
        padding: 10px;
        display: flex;
        justify-content:center ;
        align-items: center;
    }

    .swiper-wrapper {
        align-items: flex-end;
    }

    .swiper-slide {
        /* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25); */
        border-radius: 20px 20px 20px 20px;
        /* cursor: pointer; */
        display: flex;
        align-items: flex-end;
        height: 80%;
        margin-right: 30px;
        position: relative;
    }

    .swiper-button-prev{
        background-color: #fff;
        width: 40px !important;
        height: 40px !important;
        border-radius: 50%;
        width: auto;
        height: auto;
        ::after{
            color: #000;
            font-size: 18px;
        }
    }
    .swiper-button-next{
        background-color: #fff;
        width: 40px !important;
        height: 40px !important;
        border-radius: 50%;
        ::after{
            color: #000;
            font-size: 18px;
        }

    }

    /* .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    } */
`
export const TitleSection3 = styled.h1`
    color: #00A19C;
    width: 100vw;
    text-align: start;
    font-weight: 900;
`

export const Section4 = styled.section`
    height: 25vh;
    width: 100vw;
    background-color: #262626;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const LogoSection4 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    /* background-color: red; */

    img{
        width: 70%;
    }
`
export const Separa = styled.div`
    width: 0.5px;
    height: 80%;
    background-color: #fff;
`

export const ContSection4 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`
export const Topcs = styled.a`
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
`