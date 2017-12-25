import React, { Component } from 'react';
import Header, { LoginButton, NicknameButton } from 'components/Base/Header';
import { connect } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';
import storage from 'lib/storage';
import { throttle } from 'lodash';

class HeaderContainer extends Component {
    state = {
        scrolled: false
    }

    handleScroll = throttle((e) => {
        const { scrollTop } = document.documentElement;
        const scrolled = (scrollTop !== 0);
        
        if (this.state.scrolled !== scrolled) {
            this.setState({
                scrolled
            });
        }
    }, 500);
    
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

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        const { visible, needScroll, user } = this.props;
        const { handleLogout } = this;
        const { scrolled } = this.state;

        if (!visible)
            return null;

        return (
            <Header
                scrolled={scrolled}
                needScroll={needScroll}>
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
        needScroll: state.base.getIn(['header', 'needScroll']),
        user: state.user
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(HeaderContainer);