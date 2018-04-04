import React from 'react';
import ReactDOM from 'react-dom';

import Layout1 from 'root/containers/common/Layout1';
import NewsItems from 'root/components/news/NewsItemsUI';
import fetch from 'isomorphic-fetch';

class NewsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }

    render(){
        return(
            <Layout1>
                <h1>NewsList Page</h1>
                <NewsItems items={this.state.items} />
            </Layout1>
        );
    }

    componentWillMount(){
        var that = this;

        fetch('http://localhost:3000/news')
            .then(res => res.json())
            .then(res => {
                that.setState({
                    items: res
                })
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export default NewsList;
