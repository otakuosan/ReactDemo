import React from 'react';

class Layout1 extends React.Component{

    render(){
        return(
            <div>
                <header><h1>Layout1 Header 111</h1></header>
                <main>{this.props.children}</main>
                <footer><h1>Layout1 Footer 111</h1></footer>
            </div>
        );
    }
}

export default Layout1;
