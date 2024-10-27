import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
import Home from "./page/home/home";
import About from "./page/about/about";
import Catalog from "./page/catalog/catalog";
import Reviews from "./page/reviews/reviews";
import Contact from "./page/contact/contact";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'about'} element={<About/>}/>
                <Route path={'catalog'} element={<Catalog/>}/>
                <Route path={'reviews'} element={<Reviews/>}/>
                <Route path={'contact'} element={<Contact/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;