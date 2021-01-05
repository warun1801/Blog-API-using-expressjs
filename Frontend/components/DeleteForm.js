import React, { Component } from 'react'
import axios from 'axios'

export default class DeleteForm extends Component {
    state  = {
        flag:true,
        id:0
    }

    handleChangeId = event => {
        this.setState({id: parseInt(event.target.value)});
    }
    
    handleSubmit = event => {
        // event.preventDefault();

        axios.delete(`/api/delete`, { data:{id:this.state.id} })
            .then(res => {
            // console.log(res);
            console.log("ID: ",this.state.id);
            console.log(res.data);
            this.setState({flag:!this.state.flag});
            })
    }
    
    render() {
        return (
            <div>
               <p>Delete form:</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter ID:</label>
                    <input type="number" name="id" onChange={this.handleChangeId}/>
                    <button type="submit">Delete</button>
                </form> 
            </div>
        )
    }
}
