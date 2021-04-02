import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header" >
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/orders">Orders</Link>
                <button onClick={()=>setLoggedInUser({})}>sign out</button>
            </nav>
        </div>
    );
};

export default Header;