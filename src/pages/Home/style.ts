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

    .swiper {
  width: 100%;
  height: 50%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;

}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

  .swiper-paginatio{
      margin-top: 50px;
  }
}

`
export const TitleSection3 = styled.h1`
    color: #00A19C;
    width: 100vw;
    text-align: start;
`