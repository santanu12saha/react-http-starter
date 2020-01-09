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
        this.setState({selectedPostId: id});
    }

    render(){

        let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>;

        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post 
                            key={post.id} 
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
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