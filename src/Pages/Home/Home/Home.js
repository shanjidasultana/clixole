import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import AppBar from '../AppBar/AppBar';
import Banner from '../Banner/Banner';
import BannerBottom from '../Banner/BannerBottom';
import Estimate from '../Estimate/Estimate';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <AppBar></AppBar>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <About></About>
            <Services></Services>
            <Estimate></Estimate>
            <Experts></Experts>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;