import React from 'react';
import LayoutRoot from './LayoutRoot';
import FooterTabBar from './partials/FooterTabBar';

class Layout1 extends React.Component{

    render(){
        return(
            <LayoutRoot>
                <FooterTabBar content={this.props.children} />
            </LayoutRoot>
        );
    }
}

export default Layout1;
