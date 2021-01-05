import React, { Component } from 'react'
import Blog from './Blog'
import axios from 'axios'

export default class BlogList extends Component {
    state = {
        blog : []
    }


    componentDidMount() {
        axios.get(`/api/blogs`)
          .then(res => {
            const blog = res.data;
            console.log(blog);
            this.setState({ blog });
          })
    }
    
    
    
    render() {
        return (
            <div>
                <h1>Blog List:</h1>
                <ul>
                    {this.state.blog.map((blog) => <li><Blog blg={blog}/></li>)}
                </ul>
            </div>
        )
    }
}
