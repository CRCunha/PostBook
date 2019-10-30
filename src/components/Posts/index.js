import React from 'react'
import './posts.css'

import ListarPosts from '../ListarPosts'
import CardPostAdicionar from '../CardPostAdicionar'

const Posts = () => (
    <div className="posts">
        <div className="container">
            <CardPostAdicionar />
            <ListarPosts/>
        </div>
    </div>
);

export default Posts