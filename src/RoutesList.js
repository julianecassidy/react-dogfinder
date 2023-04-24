import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

/** Component for Routes
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * App -> Routes -> { DogList, DogDetails }
 */

function RoutesList({ getDogNames }) {
    console.debug("RoutesList");
    return (
        <Routes>
            <Route path="/dogs" element={<DogList dogs={() => getDogNames}/>} />
            <Route path="/dogs/:name" element={<DogDetails />} />
            <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
    )
}

export default RoutesList;