import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navContainer">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
            </nav>

        );
    }
}

export { Navbar };