import React, { Component } from 'react'
import axios from 'axios'

export default class BlogForm extends Component {
    state = {
        author: '',
        title:"",
        article:"",
        flag:true,
    }

    handleChangeAuthor = event => {
        this.setState({ author: event.target.value });
    }
    handleChangeTitle = event => {
        this.setState({ title: event.target.value });
    }
    handleChangeArticle = event => {
        this.setState({ article: event.target.value });
    }

    handleSubmit = event => {
        // event.preventDefault();

        axios.post(`/api/write`, {author: this.state.author,title: this.state.title,article: this.state.article})
            .then(res => {
            // console.log(res);
            console.log(res.data);
            this.setState({flag:!this.state.flag});
            })
    }
    render() {
        return (
            <div>
                <p>Add a blog:</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Author:</label>
                    <input type="text" name="author" onChange={this.handleChangeAuthor} />
                    <label>Title:</label>
                    <input type="text" name="title" onChange={this.handleChangeTitle} />
                    <label>Article:</label>
                    <input type="text" name="article" onChange={this.handleChangeArticle} />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
