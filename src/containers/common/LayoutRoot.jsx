import React from 'react';

class LayoutRoot extends React.Component{

    render(){

        return(
            <div>
                <main>{this.props.children}</main>
            </div>
        );
    }
}

export default LayoutRoot;
