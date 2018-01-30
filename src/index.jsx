import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import HomeIndex from './containers/home/HomeIndex.jsx';
import NewsList from './containers/news/NewsList.jsx';
import PageNotFound from './containers/common/PageNotFound.jsx';

import HocLayout from './containers/common/Layout.jsx';
import HocLayout2 from './containers/common/Layout2.jsx';
import WithLayout from './containers/common/WithLayout.jsx';

if (module.hot) {
    module.hot.accept();
}

// const test = require('./containers/common/test.jsx');
// test.default('sss');

ReactDOM.render(
    
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={WithLayout(HomeIndex)}></Route>
                <Route path="/newslist" component={NewsList} ></Route>
                <Route component={PageNotFound}/>
            </Switch>
            
            
            <ul>
                <li><Link to="/">主页</Link></li>
                <li><Link to="/newslist">新聞列表</Link></li>
                <li><Link to="/zxcz">其他</Link></li>
            </ul>
            
        </div>
    </BrowserRouter>, 
    document.getElementById('app')
);
