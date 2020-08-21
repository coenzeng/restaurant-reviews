import React, { useEffect, useContext } from 'react'
import RestaurantFinder from "../apis/RestaurantFinder"
import { RestaurantsContext } from "../context/RestaurantsContext"
import { useHistory } from "react-router-dom";
import styles from './css/styles.module.css';
import cards from './css/cards.module.css';

const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);
    let history = useHistory()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await RestaurantFinder.get("/");
            setRestaurants(response.data.data.restaurants);
          } catch (err) {}
        };
    
        fetchData();
      }, []);

      const handleDelete = async (e, id) => {
          e.stopPropagation()
          try{
              const response = await RestaurantFinder.delete(`/${id}`);
              setRestaurants(restaurants.filter(restaurant => {
                  return restaurant.id !== id
              }))
          }catch(err){
              console.log(err)
          }
      }

      const handleUpdate = (e, id) => {
        e.stopPropagation()
          history.push(`/restaurants/${id}/update`)
      }

      const handleRestaurantSelect = (id) => {
          history.push(`restaurants/${id}`)
      }
    return (
        <div>
                    {restaurants.map((restaurant) => {
                        return(
                            <div className={cards.cards} onClick={() => handleRestaurantSelect(restaurant.id)}key={restaurant.id}>
                                <h2>{restaurant.name}</h2>
                                <h3>{restaurant.location}</h3>
                                <p>{"$".repeat(restaurant.price_range)}</p>
                                <p>reviews</p>
                                <button onClick={(e) => handleUpdate(e, restaurant.id)}classNameName="btn btn-warning">Update</button>
                                <button onClick={(e) => handleDelete(e, restaurant.id)} classNameName="btn btn-danger">Delete</button>
                            </div>
                        )

                    })}
        </div>
    )
}

export default RestaurantList
