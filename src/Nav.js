import { Link } from "react-router-dom";

/** Component for Nav
 * 
 * Props:
 * - names: array of dog names
 * 
 * State:
 * - none
 * 
 * App -> Nav
 */

function Nav({ names }) {
    return (
        <nav>
            <ul>
           { names.map( n => (
             <li key={n}>
                <Link to={`/dogs/${n}`}>{n}</Link>
            </li> 
            ))}
            </ul>
        </nav>
    );
}

export default Nav;