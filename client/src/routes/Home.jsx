import React from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import NavBar from '../components/NavBar';
import '../App.css';
const Home = () => {
    return (
        <div className="container">
            <NavBar/>
            <Header/>
            <RestaurantList/>
        </div>
    )
}

export default Home
