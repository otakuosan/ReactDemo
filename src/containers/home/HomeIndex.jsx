import React from 'react';
import HomeSlider from './partials/HomeSlider.jsx';

class HomeIndex extends React.Component{
    render(){
        return(
            <div>
                <h1>首页</h1>

                {/*轮播广告图*/}
                <HomeSlider />

            </div>
        );
    }
}

export default HomeIndex;
