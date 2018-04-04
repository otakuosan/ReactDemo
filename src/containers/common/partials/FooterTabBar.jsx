import React from 'react';
import { TabBar } from 'antd-mobile';

class FooterTabBar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            selectedTab: 'Home'
        };
    }

    render(){
        return (
          <div style={{ position: 'fixed', height:'100%', width: '100%', top: 0}}>
              <TabBar
                  unselectedTintColor="#949494"
                  tintColor="#33A3F4"
                  barTintColor="white"
              >
                  <TabBar.Item
                      title=""
                      key="Home"
                      icon={<div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                      />
                      }
                      selectedIcon={<div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                      />
                      }
                      selected={this.state.selectedTab === 'Home'}
                      onPress={() => {
                          this.setState({
                              selectedTab: 'Home',
                          });
                      }}
                  >
                      <h1>首頁11111111</h1>
                  </TabBar.Item>

                  <TabBar.Item
                      icon={
                          <div style={{
                              width: '22px',
                              height: '22px',
                              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                          />
                      }
                      selectedIcon={
                          <div style={{
                              width: '22px',
                              height: '22px',
                              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                          />
                      }
                      title="購物車"
                      key="Koubei"
                      selected={this.state.selectedTab === 'redTab'}
                      onPress={() => {
                          this.setState({
                              selectedTab: 'redTab',
                          });
                      }}
                  >
                      <h1>口碑22222</h1>
                  </TabBar.Item>

              </TabBar>
          </div>
        );
    }
}

export default FooterTabBar;