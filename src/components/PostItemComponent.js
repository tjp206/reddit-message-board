import React from 'react';
import './PostItemComponent.css';

const PostItemComponent = (props) => {

    const { upvote, image, title, user, subreddit, comment_count } = props.post

    return (
        <div className="post-item">
            <div className="post-item-left">
                <button className="fas fa-caret-up"></button>
                    <span>{ upvote }</span>
                <button className="fas fa-caret-down"></button>
            </div>
            <div className="post-item-centre">
                <img src={ image } alt="" />
            </div>
            <div className="post-item-right">
                <h3><a href={`/r/${ subreddit }/${ title }`}>{ title }</a></h3>
                <span className="post-info">
                    submitted an hour ago by
                    {" "}<a href={`/u/${ user }`}>{ user }</a>{" "}
                    to
                    {" "}<a href={`/r/${ subreddit }`}>{ subreddit }</a>
                </span>
                <p className="post-info">
                    { comment_count } comments | share | save | hide | report
                </p>
            </div>
        </div>
    )
}

export default PostItemComponent;