import React from 'react';
import { SearchBar } from 'antd-mobile';
import styles from './styles.css';

class SearchBarUI extends React.Component{
    render(){
        return(
            <div className="search_bar">
                <SearchBar
                    placeholder={this.props.placeholder}
                    maxLength={8}
                    defaultValue="" />
            </div>
        );
    }
}

export default SearchBarUI;