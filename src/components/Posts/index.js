import React from 'react'
import './posts.css'

import PostMensagem from '../PostMensagem'
import PostBook from '../PostBook'

const Posts = () => (
    <div className="posts">
        <div className="container">
            <PostMensagem />
            <p />
            <PostBook />
        </div>
    </div>
);

export default Posts