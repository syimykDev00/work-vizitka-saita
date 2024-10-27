import React from 'react';
import headerLogo from './../../assets/img/headerLogo.svg'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <img src={headerLogo} alt="img"/>
                    <nav className="navbar">
                        <Link to={'/'}><a>Главная</a></Link>
                        <Link to={'about'}><a>О нас</a></Link>
                        <Link to={'catalog'}><a>Каталог</a></Link>
                        <Link to={'reviews'}><a>Отзывы</a></Link>
                        <Link to={'contact'}><a>Контакты</a></Link>
                    </nav>
                    <button>Войти</button>
                </div>
            </div>
        </header>
    );
};

export default Header;