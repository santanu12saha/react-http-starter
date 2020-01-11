import React, { Component } from 'react';

import Post from '../../../components/Post/Post';
import classes from './Posts.css';
import axios from '../../../axios';

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
        this.props.history.push({pathname: '/' + id});
        // other way without pathname
        //this.props.history.push("/" + id);
    }

    render(){

        let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>;

        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                   // <Link  key={post.id}  to={'/' + post.id}>
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
            <section className={classes.Posts}>
            {posts}
         </section>
        );
    }
}

export default Posts;