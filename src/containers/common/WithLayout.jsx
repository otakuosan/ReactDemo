import React from 'react';
import ReactDOM from 'react-dom';

const WithLayout = (WrappedComponent, layoutName = null) => {
    if(!layoutName) 
        layoutName = 'Layout';

    const lyt = require('./' + layoutName + '.jsx');
    return lyt.default(WrappedComponent);
};

export default WithLayout;
