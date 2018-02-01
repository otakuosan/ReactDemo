import React from 'react';

class LayoutRoot extends React.Component{

    render(){

        return(
            <div>
                <header><h1>Layout Header 111</h1></header>
                <main>{this.props.children}</main>
                <footer><h1>Layout Footer 222</h1></footer>
            </div>
        );
    }
}

export default LayoutRoot;
