import React from 'react';
import Banner from '../Banner/Banner';
import Event from './Event/Event';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from 'react-loader-spinner';
import Faq from './Faq/Faq';
import Review from '../../Review/Review';


const Home = () => {
    return (
        <div>

            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} timeout={2000} />
            <Banner></Banner>
            <Event></Event>
            <Faq></Faq>
            <Review></Review>
        </div>
    );

};

export default Home;

