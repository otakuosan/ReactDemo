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
            <div>
                <h1>NewsList Page</h1>
                <NewsItems items={this.state.items} />
            </div>
        );
    }

    componentWillMount(){

        console.log('加載頁面：NewsList')

        var that = this;

        try
        {
            /*
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
            */
        }
        catch(ex)
        {

        }


    }
}

export default NewsList;
