import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import HomeIndex from './containers/home/HomeIndex';
import NewsList from './containers/news/NewsList';
import NewsDetail from './containers/news/NewsDetail';
import PageNotFound from './containers/common/PageNotFound';

import WithLayout from './containers/common/WithLayout';

if (module.hot) {
    module.hot.accept();
}

// const test = require('./containers/common/test.jsx');
// test.default('sss');

ReactDOM.render(
    
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={WithLayout(HomeIndex,'Layout2')}/>
                <Route path="/newslist" component={NewsList}/>
                <Route path="/news/detail/:id" component={NewsDetail}/>
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
