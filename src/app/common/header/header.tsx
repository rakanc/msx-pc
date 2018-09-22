import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.SFC = () => (

    <nav>
        <Link to="/" className="active">Home</Link>
        {" | "}
        <Link to="/partners" className="active">Partners</Link>
        {" | "}
        <Link to="/about" className="active">About</Link>
    </nav>
)

export default Header;
