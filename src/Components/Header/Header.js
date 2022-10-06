import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/allFood'>All Food</Link>
            <Link to='/fish'>Fish</Link>
            <Link to='/burger'>Burger</Link>
            <Link to='/pizza'>Pizza</Link>
        </div>
    );
};

export default Header;