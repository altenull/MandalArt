import React, { Component } from 'react';
import { ListUp, Write } from 'containers/MandalArt';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'redux/modules/base';
import { Route } from 'react-router-dom';

class MandalArt extends Component {
    componentWillMount() {
        this.props.BaseActions.setHeaderScrollNecessity(false);
    }

    render() {
        return (
            <div>
                <Route exact path="/mandalart" component={ListUp}/>
                <Route path="/mandalart/write" component={Write}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(MandalArt);