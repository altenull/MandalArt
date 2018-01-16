import React, { Component } from 'react';
import { Background, InputWrapper, Input, InputSet, CompleteButton } from 'components/MandalArt/Write';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mandalartActions from 'redux/modules/mandalart';

class Write extends Component {
    
    handleChange = (e) => {
        const { MandalArtActions } = this.props;
        const { name, value } = e.target;

        if (name === 'goal') {
            MandalArtActions.changeGoal({
                name,
                value
            });
        }
        else {
            MandalArtActions.changePlans({
                name,
                value
            });
        }
    }

    handleWrite = async () => {
        const { goal, user, plans, history, MandalArtActions } = this.props;
        const writer = user.getIn(['loggedInfo', 'nickname']);
        const isLogged = user.get('logged');

        if (!isLogged) {
            return;
        }

        try  {
            await MandalArtActions.mandalartWrite({
                writer, goal, plans
            });

            history.push('/mandalart');
        } catch (e) {
            console.log(e);
        }
    }

    componentWillUnmount() {
        const { MandalArtActions } = this.props;
        MandalArtActions.initializeMandalArt();
    }

    render() {
        const { goal } = this.props;
        const { plan1, plan2, plan3, plan4, plan5, plan6, plan7, plan8 } = this.props.plans.toJS();
        const { handleChange, handleWrite } = this;

        return (
            <div>
                <Background/>
                <InputWrapper>
                    <InputSet>
                        <Input name="plan1" placeholder="세부목표1" value={plan1} onChange={handleChange}/>
                        <Input name="plan2" placeholder="세부목표2" value={plan2} onChange={handleChange}/>
                        <Input name="plan3" placeholder="세부목표3" value={plan3} onChange={handleChange}/>
                        <Input name="plan4" placeholder="세부목표4" value={plan4} onChange={handleChange}/>
                        <Input name="goal"  placeholder="최종목표"  value={goal}  onChange={handleChange}/>
                        <Input name="plan5" placeholder="세부목표5" value={plan5} onChange={handleChange}/>
                        <Input name="plan6" placeholder="세부목표6" value={plan6} onChange={handleChange}/>
                        <Input name="plan7" placeholder="세부목표7" value={plan7} onChange={handleChange}/>
                        <Input name="plan8" placeholder="세부목표8" value={plan8} onChange={handleChange}/>
                    </InputSet>
                    <CompleteButton onClick={handleWrite}/>
                </InputWrapper>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        goal: state.mandalart.getIn(['write', 'goal']),
        plans: state.mandalart.getIn(['write', 'plans']),
        user: state.user
    }),
    (dispatch) => ({
        MandalArtActions: bindActionCreators(mandalartActions, dispatch)
    })
)(Write);