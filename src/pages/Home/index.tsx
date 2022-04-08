import React from "react";
import Header from "../../components/Header";
import ImgHome from '../../assets/ImgHome.svg'
import Gatinho from '../../assets/Gatinho.svg'
import {
    ButtonSec1, Contents1,
    ContSec2, ImageHome,
    ImgGatinho, Section1,
    Section2, Section3,
    Sobre, StyleHome,
    TextHome, TextSec2,
    Title1, TitleSection3
} from "./style";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

export default function Home() {
    return (
        <StyleHome>
            <Header/>
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
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </Section3>
        </StyleHome>
    )
}