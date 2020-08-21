import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from "../context/RestaurantsContext";
import { forms } from './css/form.module.css';

function AddRestaurant() {
    const { addRestaurants } = useContext(RestaurantsContext);
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("Price Range")
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await RestaurantFinder.post("/", {
                name,
                location,
                price_range: priceRange,
            })
            addRestaurants(response.data.data.restaurant)
            history.push("/")
        } catch (err){

        }
    }
    return (
        <div className={forms}>
            <form action="">
            
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className={forms} placeholder="name"></input>

                   
                        <input value={location} onChange={e => setLocation(e.target.value)} type="text" className={forms} placeholder="location"></input>
                   
                    
                        <select 
                        value={priceRange} 
                        onChange={e => setPriceRange(e.target.value)}
                        className={forms}>
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>

                        </select>
                    
                    <button onClick={handleSubmit} type="submit" className={forms}>Add</button>
               
            </form>
        </div>
    )
}

export default AddRestaurant
