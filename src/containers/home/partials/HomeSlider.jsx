import React from 'react';
import {connect} from 'react-redux';
import HomeSliderUI from 'root/components/slider/HomeSliderUI.jsx';

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
        setTimeout(this.loadItems.bind(this), 1000);
    }

    loadItems(){
        // 获取数据
        const items = [
            { Image: 'slider-01.jpg', Title : 'iamge-01'},
            { Image: 'slider-02.jpg', Title : 'iamge-02'},
            { Image: 'slider-03.jpg', Title : 'iamge-03'}
        ];

        this.setState({
            items:items,
            loaded: true
        });
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
