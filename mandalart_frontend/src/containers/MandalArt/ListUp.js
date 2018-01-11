import React, { Component } from 'react';
import { ListWrapper, MandalList } from 'components/MandalArt/ListUp';
import { Spinner } from 'components/Base/Spinner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mandalartActions from 'redux/modules/mandalart';
import $ from 'jquery';

class ListUp extends Component {
    state = {
        loadingState: false
    }

    componentDidMount() {
        const { handleScroll } = this;

        this._getMandals();
        window.addEventListener('scroll', handleScroll);
    }

    componentWillUnmount() {
        const { MandalArtActions } = this.props;
        const { handleScroll } = this;

        MandalArtActions.initializeMandalArt();
        window.removeEventListener('scroll', handleScroll);
    }

    handleScroll = () => {
        $(window).scroll(() => {
            // WHEN HEIGHT UNDER SCROLLBOTTOM IS LESS THEN 250
            if ($(document).height() - $(window).height() - $(window).scrollTop() < 250) {
                if(!this.state.loadingState){
                    this._getOlderMandals();
                    this.setState({
                        loadingState: true
                    });
                }
            } else {
                if(this.state.loadingState){
                    this.setState({
                        loadingState: false
                    });
                }
            }
        });
    }

    _getMandals = async () => {
        const { MandalArtActions } = this.props;
        const mandals = await MandalArtActions.mandalartGet();
        this._setMandals(mandals);
    }

    _getOlderMandals = async () => {
        const { MandalArtActions, mandalData } = this.props;
        const mandalDataJS = mandalData.toJS();
        const lastIndex = mandalDataJS.length - 1;
        const mandals = await MandalArtActions.mandalartGetOlder(mandalDataJS[lastIndex]._id);
        this._updateMandals(mandals);
    }

    _setMandals = async (mandals) => {
        const { MandalArtActions } = this.props;
        const mandalData = mandals.data;
        await MandalArtActions.mandalartSet({mandalData});
    }

    _updateMandals = async (mandals) => {
        const { MandalArtActions } = this.props;
        const mandalData = mandals.data;
        await MandalArtActions.mandalartUpdate({mandalData});
    }

    render() {
        const { user, mandalData } = this.props;
        const writer = user.getIn(['loggedInfo', 'nickname']);
        // @TODO : mandalData가 항상 true라 Spinner 동작 안함.

        return (
            <ListWrapper isLogged={user.get('logged')}>
                {mandalData ? <MandalList data={mandalData.toJS()} currentUser={writer}/> : <Spinner/>}
            </ListWrapper>
        );
    }
}

export default connect(
    (state) => ({
        user: state.user,
        mandalData: state.mandalart.getIn(['listUp', 'mandalData'])
    }),
    (dispatch) => ({
        MandalArtActions: bindActionCreators(mandalartActions, dispatch)
    })
)(ListUp);