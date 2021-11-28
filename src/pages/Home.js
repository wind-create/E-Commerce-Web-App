import React from 'react'
import Categories from '../components/Categories';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

function Home() {
    return (
        <div>
            <Navigation />
            <Header />
            <Categories />
        </div>
    )
}


export default Home
