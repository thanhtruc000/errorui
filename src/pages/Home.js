import Announcement from '../components/Announcement';
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from "../components/Products";
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import TitlePopular from '../components/TitlePopular';


const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <TitlePopular/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
