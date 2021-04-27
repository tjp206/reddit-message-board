import React from 'react';
import Header from './Header.js';
import PostComponent from './PostComponent.js';
import './MainAppComponent.css';
import CommentExampleActions from './CommentExampleActions.js';

const MainAppComponent = () => {
    
    return (
        <div className="main">
            <Header />
            <PostComponent />
            <CommentExampleActions />
        </div>
    )
}

export default MainAppComponent;