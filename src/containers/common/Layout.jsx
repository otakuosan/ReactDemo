import React from 'react';

class Layout extends React.Component{

    render(){
        return(
            <div>
                <header><h1>Layout Header</h1></header>
                <main>{this.renderChildren()}</main>
                <footer><h1>Layout Footer</h1></footer>
            </div>
        );
    }

    renderChildren() {
        const children = this.props.children;
        return React.Children.map(children, function (child) {
            return child;
        });
    }
}

export default Layout;
