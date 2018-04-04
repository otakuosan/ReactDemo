import React from 'react';
import {connect} from 'react-redux';
import HomeSlider from './partials/HomeSlider.jsx';
import HomeSearchBar from './partials/HomeSearchBar.jsx';
import Layout1 from '../common/Layout1';
import { Link } from 'react-router-dom';

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


                <div>
                    <Link to="/news/list">sfsdfdsfsd</Link>
                </div>

            </div>
        );
    }

    componentWillMount(){
        console.log('加載頁面：HomeIndex')
    }
}

export default HomeIndex;
