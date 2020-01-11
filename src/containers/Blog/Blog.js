import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import { Route, NavLink } from 'react-router-dom';
import classes from './Blog.css';

class Blog extends Component {
   
    render () {
        
        return (
            <div className={classes.Blogs}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                exact  
                                activeClassName={classes.active}
                                activeStyle={{
                                    color:'#fa923f',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} activeClassName={classes.active}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={ ()=> <h1>Home</h1>}/>
                <Route path="/" render={ ()=> <h1>Home2</h1>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;