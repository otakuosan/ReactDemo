import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import HomeIndex from './containers/home/HomeIndex';
import NewsList from './containers/news/NewsList';
import NewsDetail from './containers/news/NewsDetail';
import PageNotFound from './containers/common/PageNotFound';
import LayoutRoot from './containers/common/LayoutRoot';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">主页</Link></li>
                <li><Link to="/news/list">新聞列表</Link></li>
                <li><Link to="/zxcz">其他</Link></li>
            </ul>
            <hr/>

            <LayoutRoot>
                <Switch>
                    <Route exact path="/" component={HomeIndex}/>
                    <Route path="/news/list" component={NewsList}/>
                    <Route path="/news/detail/:id" component={NewsDetail}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </LayoutRoot>

        </div>
    </BrowserRouter>, 
    document.getElementById('app')
);
