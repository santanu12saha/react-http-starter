import React, { Component } from 'react';

import Post from '../../../components/Post/Post';
import classes from './Posts.css';
import axios from '../../../axios';
import FullPost from '../FullPost/FullPost';

import { Route } from 'react-router-dom';

class Posts extends Component {

    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'Santanu Saha'
                    }
                });
                this.setState({posts: updatedPost});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/posts/' + id});
        console.log("Hi");
        // other way without pathname
        //this.props.history.push("/posts/" + id);
    }

    render(){

        let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>;

        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                   // <Link  key={post.id}  to={'/posts/' + post.id}>
                        <Post 
                            key={post.id}
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
                   // </Link>
                   );
            });
        }

        return(
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
          
        );
    }
}

export default Posts;