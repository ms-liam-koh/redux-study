import React, { Component } from 'react';
import axios from 'axios';
import withRequest from './withRequest';

class Post extends Component {
    render(){
        return(
            <div>
                {JSON.stringify(this.props.data)}
            </div>
        )
    }
}

export default withRequest('https://jsonplaceholder.typicode.com/posts/1')(Post);