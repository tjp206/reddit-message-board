import React from 'react';
import Header from './Header.js';
import PostComponent from './PostComponent.js';
import './MainAppComponent.css';

const MainAppComponent = () => {
    
    return (
        <div className="main">
            <Header />
            <PostComponent />
        </div>
    )
}

export default MainAppComponent;