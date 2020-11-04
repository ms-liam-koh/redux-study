import React, { Component } from 'react';
import axios from 'axios';

//HOC 함수 작성
const withRequest = (url) => (WrappedComponent) => {
    return class extends Component {
        state={
            data: null
        }

        async initialize() {
            const response = await axios.get(url);
            this. setState({data: response.data});
        }
    
        componentDidMount(){
            this.initialize();
            console.log(this.state.data);
        }

        render() {
            return(
                <WrappedComponent 
                data={this.state.data}
                ></WrappedComponent>
            )
        }
    }
}

export default withRequest;