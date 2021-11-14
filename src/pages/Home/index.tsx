import React from "react";
import Header from "../../components/Header";
import ImgHome from '../../assets/ImgHome.svg'
import Gatinho from '../../assets/Gatinho.svg'
import { ButtonSec1, Contents1, ContSec2, ImageHome, ImgGatinho, Section1, Section2, Section3, Sobre, StyleHome, TextHome, TextSec2, Title1 } from "./style";

export default function Home() {
    return (
        <StyleHome>
            <Header></Header>
            <Section1>
                <ImageHome src={ImgHome} alt="imgHome" />
                <TextHome>
                    <Title1>lorem ipsum</Title1>
                    <Contents1>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod quos consectetur impedit, distinctio eveniet voluptate praesentium soluta sit voluptas a iure assumenda aliquid,
                        iste cum asperiores illo voluptatem obcaecati ea.</Contents1>
                    <ButtonSec1>Ver Mais</ButtonSec1>
                </TextHome>
            </Section1>
            <Section2>
                <ImgGatinho src={Gatinho} alt="gatinho" />
                <TextSec2>
                    <Sobre>SOBRE NÓS</Sobre>
                    <ContSec2>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata. At vero eos
                        et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    </ContSec2>
                </TextSec2>
            </Section2>
            <Section3>
                
            </Section3>
        </StyleHome>
    )
}