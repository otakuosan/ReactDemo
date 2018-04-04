import React from 'react';
import { Link } from 'react-router-dom';

class NewsItemsUI extends React.Component {
    render() {
        return (
            <ul>
            {
                this.props.items.map((item, index) => {
                    let url = `/news/detail/${item.Id}`;
                    return (
                        <li key={index}>
                            <Link to={url} title={item.Title}>{item.Title}</Link>
                        </li>
                    )
                })
            }
            </ul>
        );
    }
}

export default NewsItemsUI;
