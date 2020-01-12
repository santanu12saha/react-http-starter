import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import classes from './Blog.css';

class Blog extends Component {
   
    state = {
        auth: false
    }

    render () {
        
        return (
            <div className={classes.Blogs}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" 
                                exact  
                                activeClassName={classes.active}
                                activeStyle={{
                                    color:'#fa923f',
                                    textDecoration: 'underline'
                                }}>Post</NavLink></li>
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
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost}/> : null}
                    <Route path="/posts"  component={Posts}/>
                    <Redirect from="/" to="/posts"/>
                    {/*<Route path="/"  component={Posts}/>*/}
                </Switch>  
            </div>
        );
    }
}

export default Blog;