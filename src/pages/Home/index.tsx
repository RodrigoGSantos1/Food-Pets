import React from "react";
import Header from "../../components/Header";
import ImgHome from '../../assets/ImgHome.svg'
import { ButtonSec1, Contents1, ImageHome, Section1, StyleHome, TextHome, Title1 } from "./style";

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
        </StyleHome>
    )
}