import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

/** Routes for dogs
 *
 * Props:
 * dogs: array of dog objects
 *
 * State:
 * -
 *
 * App -> RoutesList
 */

function RoutesList({ dogs }) {
    console.debug("RoutesList");

    return (
        <Routes>
            <Route path="/dogs" element={<DogList dogs={dogs}/>} />
            <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
            <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
    )
}

export default RoutesList;