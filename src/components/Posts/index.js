import React from 'react'
import './posts.css'

import CardPost from '../CardPost'



const Posts = () => (
    <div className="posts">
        <div className="container">
            <CardPost tag="book" />
            <CardPost tag="comment" />
            <CardPost tag="other" />
            <CardPost tag="comment" />
            <CardPost tag="other" />
            <CardPost tag="book" />
            <CardPost tag="book" />
        </div>
    </div>
);

export default Posts