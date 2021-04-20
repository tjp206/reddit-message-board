import React from 'react';
import './SideNav.css';

const SideNav = () => {

    const menus = [
        { to: '/r/all', text: "All"},
        { to: '/r/popular', text: "Popular"},
        { to: '/r/random', text: "Random"}
    ]

    const subreddits = [
        "askreddit",
        "movies",
        "wrestling",
        "football",
        "education",
        "art",
        "travelideas",
        "food",
        "relationships",
        "comedy",
        "gifs",
        "science",
        "technology",
        "memes",
        "news",
        "marvelcomics",
        "dccomics",
        "disneyplus"
    ]

    return (
        <div className="sideNav"> 
            <div className="sideNav-logo">
                <img src="https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png" alt="Reddit Logo"/>
            </div>
            <div className="sideNav-search">
                <input type="text" name="search" placeholder="Search" />
                <i className="fas fa-search" />
            </div>
            <div className="sideNav-link">
                <ul className="sideNav-menu">
                    {menus.map(menu => (
                        <li>
                            <a href={menu.to}>{menu.text}</a>
                        </li>
                    ))}
                </ul>
                <hr/>
                <ul className="sideNav-subreddits">
                    {subreddits.map(subreddit => (
                        <li>
                            <a href={`/r/${subreddit}`}>{subreddit}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideNav;