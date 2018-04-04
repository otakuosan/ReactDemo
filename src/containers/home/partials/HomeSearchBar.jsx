import React from 'react';
import SearchBarUI from 'root/components/common/SearchBarUI';

class HomeSearchBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <SearchBarUI placeholder="商品搜索" />
        );
    }
}

export default HomeSearchBar;

