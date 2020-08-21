import React from 'react'
import Header from '../components/Header'
import AddRestaurant from '../components/AddRestaurant'
import RestaurantList from '../components/RestaurantList'
import NavBar from '../components/NavBar'
const Home = () => {
    return (
        <div>
            <Header/>
            <NavBar/>
            <RestaurantList/>
        </div>
    )
}

export default Home
