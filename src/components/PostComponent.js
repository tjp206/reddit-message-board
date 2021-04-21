import React from 'react';
import PostItemComponent from './PostItemComponent';
import './PostComponent.css';

const PostComponent = () => {

    const posts = [
        {
            upvote: 316,
            image: "https://images.unsplash.com/photo-1488656711237-487ce1cc53b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80",
            title: "Why wrestling is considered a 'real' sport",
            user: "tjp206",
            subreddit: "wrestling",
            comment_count: 555,
        },
        {
            upvote: 5112,
            image: "https://images.unsplash.com/photo-1522107992019-d841a73de1f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            title: "European Super League, you're having a giraffe! ",
            user: "tjp206",
            subreddit: "football",
            comment_count: 16257,
        },
        {
            upvote: 152,
            image: "https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
            title: "Nasa's mission to Mars, how it's going so far...",
            user: "tjp206",
            subreddit: "science",
            comment_count: 86,
        },
        {
            upvote: 214,
            image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80",
            title: "Why we're all afraid of the new age of tech",
            user: "tjp206",
            subreddit: "technology",
            comment_count: 126,
        },
        {
            upvote: 892,
            image: "https://images.unsplash.com/photo-1592438224611-fa028bc2c22c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
            title: "Thanos: was he just misunderstood?",
            user: "tjp206",
            subreddit: "realworldissues",
            comment_count: 10269,
        },
        {
            upvote: 29,
            image: "https://images.unsplash.com/photo-1618506469810-282bef2b30b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
            title: "Working from home, the new 'normal'",
            user: "tjp206",
            subreddit: "covid19",
            comment_count: 19,
        },
    ]

    return (
        <div className="posts">
            {posts.map(post => (
                <PostItemComponent post={post} />
            ))}
        </div>
    )
}

export default PostComponent;