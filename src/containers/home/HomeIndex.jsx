import React from 'react';
import {connect} from 'react-redux';
import HomeSlider from './partials/HomeSlider.jsx';
import HomeTopBar from './partials/HomeTopBar.jsx';

class HomeIndex extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>首页</h1>

                <HomeTopBar />

                {/*轮播广告图*/}
                <HomeSlider />

            </div>
        );
    }

    componentWillMount(){

    }
}


function mapStateToProps(state){
    return {
        userData : state.user
    };
}

function mapDispatchToProps(dispath){
    return { };
}

//export default HomeIndex;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeIndex);
