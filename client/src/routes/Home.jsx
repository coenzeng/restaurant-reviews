<<<<<<< HEAD
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
=======
import React from "react";
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </div>
  );
};

export default Home;
>>>>>>> d263a669e8d4e1339f849a111e906a1b003d64e3
