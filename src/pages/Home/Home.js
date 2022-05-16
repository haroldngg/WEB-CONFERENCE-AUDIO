import React from 'react';
import Features from './Features/Features';
import Header from './Header/Header';
import './home.css';

function Home() {
    return ( 
        <div className = 'home'>
            <div className= "Header">
                <Header />
            </div>  
            <div className = "main">
                <Features />
            </div> 
        </div>
    )
}

export default Home