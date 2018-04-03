import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Layout1 from 'root/containers/common/Layout1.jsx';

class NewsList extends React.Component{
    render(){
        return(
            <Layout1>
                <h1>NewsList Page</h1>

                <ul>
                    <li><Link to="/news/detail/1">新聞111</Link></li>
                    <li><Link to="/news/detail/2">新聞222</Link></li>
                    <li><Link to="/news/detail/3">新聞333</Link></li>
                </ul>
            </Layout1>
        );
    }
}

export default NewsList;
