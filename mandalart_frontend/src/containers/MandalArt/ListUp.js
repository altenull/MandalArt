import React, { Component } from 'react';
import { ListWrapper, MandalList } from 'components/MandalArt/ListUp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mandalartActions from 'redux/modules/mandalart';

class ListUp extends Component {
    render() {
        const { user } = this.props;
        
        return (
            <ListWrapper isLogged={user.get('logged')}>
                <MandalList/>
            </ListWrapper>
        );
    }
}

export default connect(
    (state) => ({
        user: state.user
    }),
    (dispatch) => {
        MandalArtActions: bindActionCreators(mandalartActions, dispatch)
    }
)(ListUp);