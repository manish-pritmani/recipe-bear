import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className="logo">
        RecipeBear<span>.</span>
        </Link>
    )
}

export default Logo;