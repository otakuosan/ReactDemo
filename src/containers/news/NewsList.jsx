import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class NewsList extends React.Component{
    render(){
        return(
            <div>
                <h1>NewsList Page</h1>

                <ul>
                    <li><Link to="/news/detail/1">新聞111</Link></li>
                    <li><Link to="/news/detail/2">新聞222</Link></li>
                    <li><Link to="/news/detail/3">新聞333</Link></li>
                </ul>
            </div>
        );
    }
}

export default NewsList;
