import React from 'react';

class Layout1 extends React.Component{

    render(){
        return(
            <div>
                <header><h1>Layout1 Header</h1></header>
                <main>{this.props.children}</main>
                <footer><h1>Layout1 Footer</h1></footer>
            </div>
        );
    }
}

export default Layout1;
