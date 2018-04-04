import React from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class FooterTabBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const selectedTab = this.getSelectedTab();

        return (
            <div style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首頁"
                        key="Home"
                        selected={selectedTab === 'Home'}
                        onPress={() => {
                            this.props.history.push("/");
                        }}
                    >
                        {
                            selectedTab === 'Home'
                                ? this.props.content
                                : null
                        }
                    </TabBar.Item>

                    <TabBar.Item
                        title="消息"
                        key="News"
                        selected={selectedTab === 'News'}
                        onPress={() => {
                            this.props.history.push("/news/list");
                        }}
                    >
                        {
                            selectedTab === 'News'
                                ? this.props.content
                                : null
                        }
                    </TabBar.Item>

                </TabBar>
            </div>
        );
    }

    getSelectedTab(){
        let selectedTab = null;
        let pathName = this.props.history.location.pathname.toLowerCase();

        switch (pathName) {
            case '/news/list':
                selectedTab = 'News';
                break;

            default:
                selectedTab = 'Home';
                break;
        }

        return selectedTab;
    }
}

export default withRouter(FooterTabBar);