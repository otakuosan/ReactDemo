import React from 'react';
import { Carousel } from 'antd';
import PathUtil from 'root/utils/PathUtil.js';
import styles from './styles.css';

class HomeSliderUI extends React.Component {
    render() {

        return (
            <div className="home-slider">
                <Carousel autoplay>
                {
                    this.props.items.map((item, index) => {
                        const itemImg = PathUtil.getSliderImage(item.Image);
                        return (
                            <div key={index}>
                                <img src={itemImg} title={item.Title} alt={item.Title} />
                            </div>
                        )
                    })
                }
                </Carousel>
            </div>
        );
    }
}

export default HomeSliderUI;
