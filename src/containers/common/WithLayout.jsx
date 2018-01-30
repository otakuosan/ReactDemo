import React from 'react';
import ReactDOM from 'react-dom';

const WithLayout = (wrappedComponent, layoutName = null) => {
    if(!layoutName) 
        layoutName = 'Layout';

    const lyt = require('./' + layoutName + '.jsx');
    return lyt.default(wrappedComponent);
};

export default WithLayout;
