<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./routes/Home"
import UpdatePage from "./routes/UpdatePage"
import RestaurantDetailPage from "./routes/RestaurantDetailPage"
import NewRestaurant from "./routes/NewRestaurant"
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = () => {
    return(
            <RestaurantsContextProvider>
                <div className="container">
                    <Router>
                        <Switch>
                        <Route exact path ="/" component={Home}/>
                        <Route exact path ="/restaurants/add" component={NewRestaurant}/>
                        <Route exact path ="/restaurants/:id/update" component={UpdatePage}/>
                        <Route exact path ="/restaurants/:id" component={RestaurantDetailPage}/>
                        </Switch>
                    </Router>
                </div>
            </RestaurantsContextProvider>
    )
}

export default App;
=======
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/restaurants/:id/update"
              component={UpdatePage}
            />
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantDetailPage}
            />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
>>>>>>> d263a669e8d4e1339f849a111e906a1b003d64e3
