import React from 'react';
import ReactDOM from 'react-dom';

class NewsDetail extends React.Component{
    render(){

        console.log(this.props);

        return(
            <div>
                <h1>NewsDetail Page</h1>
                <h2>ID: {this.props.match.params.id}</h2>
            </div>
        );
    }
}

export default NewsDetail;
