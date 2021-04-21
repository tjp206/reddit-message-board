import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div className="header">
            <ul>
                <li><a href="/r/popular" className="active">Popular</a></li>
                <li><a href="/r/hot">Hot</a></li>
                <li><a href="/r/social">Social</a></li>
                <li><a href="/r/rising">Rising</a></li>
                <li><a href="/r/controversial">Controversial</a></li>
            </ul>
        </div>
    )
}

export default Header;