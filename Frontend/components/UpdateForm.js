import React, { Component } from 'react'
import axios from 'axios'


export default class UpdateForm extends Component {
    state = {
        id:0,
        article:"",
        flag:true,
    }
    
    handleChangeId = event => {
        this.setState({id: parseInt(event.target.value)});
    }
    handleChangeArticle = event => {
        this.setState({ article: event.target.value });
    }
    

    handleSubmit = event => {
        // event.preventDefault();

        axios.put(`/api/update`, {id:this.state.id,article: this.state.article})
            .then(res => {
            // console.log(res);
            console.log(res.data);
            this.setState({flag:!this.state.flag});
            })
    }
    
    
    
    render() {
        return (
            <div>
                <p>Update form:</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter ID:</label>
                    <input type="number" name="id" onChange={this.handleChangeId}/>
                    <label>Article:</label>
                    <input type="text" name="article" onChange={this.handleChangeArticle} />
                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
}
