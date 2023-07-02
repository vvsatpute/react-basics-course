import React from "react";
import {NavLink} from "react-router-dom";


const Nav = ({theme, toggleTheme}) => {
    return (
        <nav className="split">
            <NavLink to="/" className={({isActive}) => "nav-link" + (isActive? "active" : "")}>
                Popular
            </NavLink>
            <ul className="row">
                <li>
                    <NavLink to="/" className={({isActive}) => "nav-link" + (isActive? "active" : "")}>
                        Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/battle" className={({isActive}) => "nav-link" + (isActive? "active" : "")}>
                        Github Battle
                    </NavLink>
                </li>
                <li>
                    <button onClick={toggleTheme}>
                        {theme === 'light' ? 'Dark' : 'Light'}
                    </button>
                </li>
            </ul>

        </nav>
    )
}

export default Nav;
