import React from 'react';
import {Navbar} from '../components/Navbar';

class Home extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <h1>Hello, Home Page!</h1>
                <Navbar/>
            </div>
        );
    }
}

export { Home };
