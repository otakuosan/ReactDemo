import React from 'react';
import Layout from '../common/Layout';

class HomeIndex extends React.Component{
    render(){
        return(
            <Layout>
                <h1>Home Index</h1>
            </Layout>
        );
    }
}

class HomeIndex2 extends HomeIndex{
    render(){
        return (
            <div>
                <h1>aaaa</h1>
                {super.render()}
                <h2>bbbbbb</h2>
            </div>
        );
    }
}

export default HomeIndex;
