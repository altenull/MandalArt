import React, { Component } from 'react';
import Header, { LoginButton, NicknameButton } from 'components/Base/Header';
import { connect } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';
import storage from 'lib/storage';

class HeaderContainer extends Component {
    handleLogout = async () => {
        const { UserActions } = this.props;
        try {
            await UserActions.logout();
        } catch (e) {
            console.log(e);
        }

        storage.remove('loggedInfo');
        window.location.href = '/';
    }

    render() {
        const { visible, user } = this.props;
        const { handleLogout } = this;
        
        if (!visible)
            return null;

        return (
            <Header>
                { user.get('logged') 
                    ? ( <NicknameButton onClick={handleLogout}>
                            {user.getIn(['loggedInfo', 'nickname'])}
                        </NicknameButton>
                      )
                    : <LoginButton/> 
                }
            </Header>

        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['header', 'visible']),
        user: state.user
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(HeaderContainer);