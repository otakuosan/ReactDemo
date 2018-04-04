import React from 'react';
import { TabBar } from 'antd-mobile';
import { Redirect } from 'react-router-dom';

class FooterTabBar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            selectedTab: 'Home'
        };
    }

    render(){
        //let pageName = this.props.pageName;

        return (
          <div style={{ position: 'fixed', height:'100%', width: '100%', top: 0}}>
              <TabBar
                  unselectedTintColor="#949494"
                  tintColor="#33A3F4"
                  barTintColor="white"
              >
                  <TabBar.Item
                      title="首頁"
                      key="Home"
                      selected={this.state.selectedTab === 'Home'}
                      onPress={() => {
                          this.setState({
                              selectedTab: 'Home'
                          });
                      }}
                  >
                      { this.state.selectedTab === 'Home' ? <Redirect to="/" /> : null }
                  </TabBar.Item>

                  <TabBar.Item
                      title="消息"
                      key="News"
                      selected={this.state.selectedTab === 'News'}
                      onPress={() => {

                          this.setState({
                              selectedTab: 'News'
                          });

                      }}
                  >
                      { this.state.selectedTab === 'News' ?
                          <Redirect to="/news/list" /> : null }
                  </TabBar.Item>

              </TabBar>
          </div>
        );
    }

}

export default FooterTabBar;