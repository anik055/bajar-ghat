import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header bg-dark text-primary" >
            <div className="headNav d-flex bd-highlight bg-dark">
            <div className="p-2 deco flex-grow-1 bd-highlight"><Link className="text-white text-decoration-none" to="/home">Bajar Shodai</Link></div>
            <div className="p-2 bd-highlight"><Link className="text-white text-decoration-none" to="/home">Home</Link></div>
            <div className="p-2 bd-highlight"><Link className="text-white text-decoration-none" to="/orders">Orders</Link></div>
            
            <div className="p-2 bd-highlight"><Link className="text-white text-decoration-none" to="/admin">Admin</Link></div>
            <div className="p-2 bd-highlight"><Link className="text-white text-decoration-none" to="/login">Login </Link></div>
            <div className="p-2 bd-highlight"><button onClick={()=>setLoggedInUser({})}>sign out</button></div>
            </div>
        </div>
    );
};

export default Header;