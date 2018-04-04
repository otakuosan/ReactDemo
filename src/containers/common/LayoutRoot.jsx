import React from 'react';

class LayoutRoot extends React.Component{

    render(){

        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default LayoutRoot;
