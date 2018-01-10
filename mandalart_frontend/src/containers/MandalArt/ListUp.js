import React, { Component } from 'react';
import { ListWrapper, MandalList } from 'components/MandalArt/ListUp';
import { Spinner } from 'components/Base/Spinner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mandalartActions from 'redux/modules/mandalart';

class ListUp extends Component {
    componentDidMount() {
        this._getMandals();
    }

    componentWillUnmount() {
        const { MandalArtActions } = this.props;
        MandalArtActions.initializeMandalData();
    }

    _getMandals = async () => {
        const { MandalArtActions } = this.props;
        const mandals = await MandalArtActions.mandalartGet();
        this._setMandals(mandals);
    }

    _setMandals = async (mandals) => {
        const { MandalArtActions } = this.props;
        const mandalData = mandals.data;
        await MandalArtActions.mandalartSet({mandalData});
    }

    render() {
        const { user, mandalData } = this.props;
        const writer = user.getIn(['loggedInfo', 'nickname']);

        return (
            <ListWrapper isLogged={user.get('logged')}>
                {mandalData.toJS() ? <MandalList data={mandalData.toJS()} currentUser={writer}/> : <Spinner/>}
            </ListWrapper>
        );
    }
}

export default connect(
    (state) => ({
        user: state.user,
        mandalData: state.mandalart.get('mandalData')
    }),
    (dispatch) => ({
        MandalArtActions: bindActionCreators(mandalartActions, dispatch)
    })
)(ListUp);