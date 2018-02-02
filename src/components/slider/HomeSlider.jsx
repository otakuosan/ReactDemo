import React from 'react';
import PathUtil from 'root/utils/PathUtil.js';

class HomeSlider extends React.Component {
    render() {

        return (
            <div className="home-slider">
                {
                    this.props.items.map((item, index) => {
                        const itemImg = PathUtil.getSliderImage(item.Image);
                        return (<div key={index}>
                                    <img src={itemImg} title={item.Title}/>
                                </div>);
                    })
                }
            </div>
        );
    }
}

export default HomeSlider;
