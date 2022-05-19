import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ImgHome from '../../assets/ImgHome.svg'
import Gatinho from '../../assets/Gatinho.svg'
import Logo from '../../assets/Logo2.png'
import {
    AreaContetCard,
    ButtonCard,
    ButtonSec1, Contents1,
    ContetCard,
    ContSec2, ContSection4, ImageHome,
    ImgGatinho, LogoSection4, Section1,
    Section2, Section3,
    Section4,
    Separa,
    Sobre, StyleHome,
    SwiperStyle,
    TextHome, TextSec2,
    Title1, TitleSection3, Topcs
} from "./style";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import { getProducts } from "../../services/api";

export default function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        hundleProducts()
    }, [])

    const hundleProducts = async () => {
        //@ts-ignore
        const { status, data } = await getProducts()
        setProducts(data)

    }

    return (
        <StyleHome>
            <Header />
            <Section1 id="home">
                <ImageHome src={ImgHome} alt="imgHome" />
                <TextHome>
                    <Title1>lorem ipsum</Title1>
                    <Contents1>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod quos consectetur impedit, distinctio eveniet voluptate praesentium soluta sit voluptas a iure assumenda aliquid,
                        iste cum asperiores illo voluptatem obcaecati ea.</Contents1>
                    <ButtonSec1>Ver Mais</ButtonSec1>
                </TextHome>
            </Section1>
            <Section2 id="sobre">
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
            <Section3 id="produtos">
                <TitleSection3>NOSSOS PRODUTOS</TitleSection3>
                <SwiperStyle>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper"
                    >
                        {products.map((obj: any, i: any) => {
                            return (
                                <SwiperSlide
                                    className={"swiper-slide"}
                                >
                                    <AreaContetCard>
                                        <img src={Gatinho} alt="gatinho" />

                                        <ButtonCard>Comprar</ButtonCard>
                                    </AreaContetCard>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </SwiperStyle>
            </Section3>
            <Section4 id="contato">
                <LogoSection4>
                    <img src={Logo} alt="Logo" />
                </LogoSection4>
                <Separa />
                <ContSection4>
                    <Topcs href="/#home"> Home </Topcs>
                    <Topcs href="/#sobre"> Sobre </Topcs>
                    <Topcs href="/#produtos"> Produtos </Topcs>
                    <Topcs onClick={() => {
                        window.location.href = '/login';
                    }}> Login </Topcs>
                    <Topcs onClick={() => {
                        window.location.href = '/register';
                    }}> Cadastro </Topcs>
                </ContSection4>
            </Section4>
        </StyleHome>
    )
}