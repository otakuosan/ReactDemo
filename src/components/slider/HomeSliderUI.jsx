import React from 'react';
import { Carousel } from 'antd-mobile';
import PathUtil from 'root/utils/PathUtil.js';
import styles from './styles.css';

class HomeSliderUI extends React.Component {
    render() {

        return (
            <div className="home-slider">
                <Carousel
                    autoplay
                    infinite>
                {
                    this.props.items.map((item, index) => {
                        const itemImg = PathUtil.getSliderImage(item.Image);
                        return (
                            <a href={item.Url} key={index}>
                                <img src={itemImg} title={item.Title} alt={item.Title} />
                            </a>
                        )
                    })
                }
                </Carousel>
            </div>
        );
    }
}

export default HomeSliderUI;
