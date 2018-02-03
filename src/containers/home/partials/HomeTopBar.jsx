import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from 'root/redux/actions/UserActions';

class HomeTopBar extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    {
                        !this.props.userData.isAuthed
                            ? <button type="button" onClick={this.onUserLogin.bind(this)}>请登入</button>
                            : <span>
                                    你好：{this.props.userData.username}
                                <button type="button" onClick={this.onUserLogout.bind(this)}>登出</button>
                              </span>
                    }
                </h1>
            </div>
        );
    }

    componentWillMount(){

    }

    onUserLogin() {
        let user = {username: 'you', id: 123};
        this.props.userActions.login(user);
    }

    onUserLogout() {
        this.props.userActions.logout();
    }
}

function mapStateTopProps(state) {
    return {
        userData: state.user
    }
}

function mapDispatchToProps(dispath) {
    return {
        userActions : bindActionCreators(userActions, dispath)
    }
}

export default connect(
    mapStateTopProps,
    mapDispatchToProps
)(HomeTopBar);



