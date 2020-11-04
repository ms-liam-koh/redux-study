import React, { Component } from 'react';
import withRequest from './withRequest';

class Comment extends Component {
    render(){
        const { data } = this.props;

        return(
            <div>
                {JSON.stringify(data)}
            </div>
        )
    }
}
//hoc 사용 : 인자, hoc 사용할 컴포넌트
export default withRequest('https://jsonplaceholder.typicode.com/comments?postId=1')(Comment);