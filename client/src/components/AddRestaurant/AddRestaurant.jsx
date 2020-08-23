<<<<<<< HEAD:client/src/components/AddRestaurant/AddRestaurant.jsx
import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import RestaurantFinder from '../../apis/RestaurantFinder'
import { RestaurantsContext } from "../../context/RestaurantsContext";
import styles from './AddRestaurant.module.css';

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
        <div className={styles.container}>
            <form action="">
            
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className={styles} placeholder="name"></input>

                   
                        <input value={location} onChange={e => setLocation(e.target.value)} type="text" className={styles} placeholder="location"></input>
                   
                    
                        <select 
                        value={priceRange} 
                        onChange={e => setPriceRange(e.target.value)}
                        className={styles}>
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>

                        </select>
                    
                    <button onClick={handleSubmit} type="submit" className={styles}>Add</button>
               
            </form>
        </div>
    )
}

export default AddRestaurant
=======
import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      console.log(response.data.data);
      addRestaurants(response.data.data.restaurant);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
>>>>>>> d263a669e8d4e1339f849a111e906a1b003d64e3:client/src/components/AddRestaurant.jsx
