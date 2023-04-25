import { NavLink } from "react-router-dom";

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

    console.log("nav names", names);
    return (
        <div className="Nav">
            {/* TODO: ul element could be nav element */}
            <ul>
                {names.map(name => (
                    <li key={name}>
                        <NavLink
                            to={`/dogs/${name}`}
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                };
                            }}
                            // TODO: names in URL are capitalized
                            // better to use lowercase - for certain
                            // case-sensitive browsers.
                            // best for SEO
                        >{name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Nav;