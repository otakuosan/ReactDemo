import React from 'react';
import Layout2 from 'root/containers/common/Layout2.jsx';

class NewsDetail extends React.Component{
    render(){

        return(
            <Layout2>
                <h1>NewsDetail Page</h1>
                <h2>ID: {this.props.match.params.id}</h2>
            </Layout2>
        );
    }
}

export default NewsDetail;
