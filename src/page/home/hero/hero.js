import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { RiYoutubeLine } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";
import heroImage from './../../../assets/img/heroImage.png'

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero-general">
                        <div className="hero-group">
                            <h1>Учитесь с нуля до middle <br/>
                                за 9,5 месяцев
                                <br/>
                                <br/>
                                Станьте UX/UI-Дизайнером</h1>
                            <p>Создайте удобные интерфейсы под
                                руководством международных экспертов,
                                соберите портфолио и начните
                                карьеру в перспективной сфере</p>
                            <button>Записаться</button>
                            <div className="hero-icons">
                                <a href="#">
                                    <FaInstagram />
                                </a>
                                <a href="#">
                                    <PiTelegramLogo />
                                </a>
                                <a href="#">
                                    <RiYoutubeLine />
                                </a>
                                <a href="#">
                                    <AiOutlineLinkedin />
                                </a>
                                <a href="#">
                                    <FaBehance />
                                </a>
                            </div>
                        </div>
                        <img src={heroImage} alt="img"/>
                    </div>
                    <div className="circles-group">
                        <div className="circle-one"></div>
                        <div className="circle-two"></div>
                        <div className="circle-one"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;