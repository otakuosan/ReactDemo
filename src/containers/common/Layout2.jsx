import React from 'react';

class Layout2 extends React.Component{

    render(){
        return(
            <div>
                <header><h1>母版2的頁頭</h1></header>
                <main>{this.props.children}</main>
                <footer><h1>母版2的頁腳</h1></footer>
            </div>
        );
    }
}

export default Layout2;
