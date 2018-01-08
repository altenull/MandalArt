import React, { Component } from 'react';
import { ListWrapper, MandalList } from 'components/MandalArt/ListUp';
import { Spinner } from 'components/Base/Spinner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mandalartActions from 'redux/modules/mandalart';

class ListUp extends Component {
    state = {}

    componentDidMount() {
        this._getMandals();
    }

    _getMandals = async () => {
        const { MandalArtActions } = this.props;
        const mandals = await MandalArtActions.mandalartGet();
        this.setState({
            mandals
        })
    }

    render() {
        const { mandals } = this.state;
        const { user } = this.props;
        const writer = user.getIn(['loggedInfo', 'nickname']);

        return (
            <ListWrapper isLogged={user.get('logged')}>
                {mandals ? <MandalList data={mandals.data} currentUser={writer}/> : <Spinner/>}
            </ListWrapper>
        );
    }
}

export default connect(
    (state) => ({
        user: state.user
    }),
    (dispatch) => ({
        MandalArtActions: bindActionCreators(mandalartActions, dispatch)
    })
)(ListUp);