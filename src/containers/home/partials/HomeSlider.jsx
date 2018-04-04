import React from 'react';
import {connect} from 'react-redux';
import HomeSliderUI from 'root/components/slider/HomeSliderUI';

class HomeSlider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loaded: false
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.loaded
                        ? <HomeSliderUI items={this.state.items}/>
                        : <span>Loading...</span>
                }
            </div>
        );
    }

    componentWillMount() {
        this.loadItems();
    }

    loadItems(){

        let that = this;
        const cacheKey = 'HomeSlider';

        // 获取数据
        let itemsData = null;
        let itemsJson = localStorage.getItem(cacheKey);
        if(itemsJson) {
            console.log('从LocalStorage获取Items');

            itemsData = JSON.parse(itemsJson);

            that.setState({
                items:itemsData,
                loaded: true
            });
        }else{
            console.log('从Remote获取Items');

            setTimeout(function () {
                itemsData = [
                    { Image: 'slider-01.jpg', Title : 'iamge-01', Url: 'http://www.baidu.com'},
                    { Image: 'slider-02.jpg', Title : 'iamge-02', Url: 'http://www.qq.com'},
                    { Image: 'slider-03.jpg', Title : 'iamge-03', Url: 'http://www.douyu.com'}
                ];

                itemsJson = JSON.stringify(itemsData);
                localStorage.setItem(cacheKey, itemsJson);

                that.setState({
                    items:itemsData,
                    loaded: true
                });

            }, 1000);
        }
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispath){
    return {

    };
}

//export default HomeSlider;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeSlider);
