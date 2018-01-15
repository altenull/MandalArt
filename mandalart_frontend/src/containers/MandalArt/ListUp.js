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

    shouldComponentUpdate(nextProps, nextState) {
        const current = {
            props: this.props,
            state: this.state
        };

        const next = {
            props: nextProps,
            state: nextState
        };

        return JSON.stringify(current) !== JSON.stringify(next);
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

    handleRemove = async (id, index) => {
        const { MandalArtActions } = this.props;

        try {
            const result = await MandalArtActions.mandalartDelete(id);
            if (result.statusText === 'OK') {
                setTimeout(() => {
                    MandalArtActions.mandalartDeleteInState({index});
                }, 1000);
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleStar = async (id, index) => {
        const { MandalArtActions, user } = this.props;
        const provider = user.getIn(['loggedInfo', 'nickname']);

        try {
            const mandal = await MandalArtActions.mandalartStar({
                id,
                provider
            });
            if (mandal.statusText === 'OK') {
                const mandalData = mandal.data;
                MandalArtActions.mandalartUpdateInState({index, mandalData});
            }
        } catch (e) {
            console.log(e);
        }
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

        if (mandals.data.length !== 0) {
            this._updateMandals(mandals);
        }
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
        const { user, mandalData, deleteID } = this.props;
        const { handleRemove, handleStar } = this;
        const writer = user.getIn(['loggedInfo', 'nickname']);
        const isLogged = user.get('logged');

        return (
            <ListWrapper isLogged={isLogged}>
                {!mandalData.isEmpty()
                    ? <MandalList
                        data={mandalData.toJS()}
                        currentUser={writer}
                        handleRemove={handleRemove}
                        deleteID={deleteID}
                        handleStar={(isLogged ? handleStar : ()=>{console.log('need Login');})}/>
                    : <Spinner/>
                }
            </ListWrapper>
        );
    }
}

export default connect(
    (state) => ({
        user: state.user,
        mandalData: state.mandalart.getIn(['listUp', 'mandalData']),
        deleteID: state.mandalart.get('deleteID')
    }),
    (dispatch) => ({
        MandalArtActions: bindActionCreators(mandalartActions, dispatch)
    })
)(ListUp);