import React from 'react';
import {connect} from 'react-redux';
import HomeSlider from './partials/HomeSlider.jsx';
import HomeSearchBar from './partials/HomeSearchBar.jsx';

class HomeIndex extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>

                {/* 頂部搜索欄 */}
                <HomeSearchBar />

                {/* 輪播廣告圖 */}
                <HomeSlider />

                <div style={{ backgroundColor: '#AA0000', color: '#FFF', textAlign:'center'}}>aaa</div>

            </div>
        );
    }

    componentWillMount(){

    }
}

export default HomeIndex;
