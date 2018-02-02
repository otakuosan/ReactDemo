import React from 'react';
import HomeSlider from 'root/components/slider/HomeSlider.jsx';

class CtrHomeSlider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render(){
        return(
            <div>
                <HomeSlider items={this.state.items}/>
            </div>
        );
    }

    componentWillMount(){
        const items = [
            { Image: 'slider-01.jpg', Title : 'iamge-01'},
            { Image: 'slider-02.jpg', Title : 'iamge-02'},
            { Image: 'slider-04.jpg', Title : 'iamge-03'}
        ];

        this.setState({
            items:items
        });
    }
}

export default CtrHomeSlider;
