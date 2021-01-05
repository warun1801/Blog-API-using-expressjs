import React, { Component } from 'react'

export default class Blog extends Component {
    state = { 
        attr : {
            display: 'none',
        }
    }
    
    titleClickHandler = () => {
        if (this.state.attr.display === 'none'){
            this.setState({attr:{display: 'block'}});
        }else{
            this.setState({attr:{display: 'none'}});
        }
    }
    
    
    render() {
        return (
            <div>
                <h2 className="blog-title" onClick={this.titleClickHandler}>{this.props.blg.id}. {this.props.blg.title}</h2>
                <small>{this.props.blg.author}</small>
                <p style={this.state.attr} >{this.props.blg.article}</p>           
            </div>
        )
    }
}
