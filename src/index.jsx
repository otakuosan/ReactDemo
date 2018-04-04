import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import appStore from 'root/redux/stores/Index.js';

import HomeIndex from './containers/home/HomeIndex';
import NewsList from './containers/news/NewsList';
import NewsDetail from './containers/news/NewsDetail';
import PageNotFound from './containers/common/PageNotFound';
import Layout1 from './containers/common/Layout1';
import Layout2 from './containers/common/Layout2';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Provider store={appStore}>
        <HashRouter>
            <Layout1>
                <Switch>
                    <Route exact path="/" component={HomeIndex} />
                    <Route path="/news/list" component={NewsList} />
                </Switch>
            </Layout1>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);
