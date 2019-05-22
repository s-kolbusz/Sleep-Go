import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Object from '../../components/Object/Object';
import classes from './Objects.module.css';

class Objects extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                <Link to={'/objects/' + post.id} key={post.id}>
                    <Object              
                        title={post.title}
                        author={post.author}
                        match={this.props.match}
                        clicked={() => this.postSelectedHandler(post.id)} />
                </Link>);
            });
        }

        return (
            <section className={classes.Objects}>
                {posts}
            </section>
        );
    }
}

export default Objects;