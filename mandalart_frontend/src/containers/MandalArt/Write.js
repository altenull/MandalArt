import React, { Component } from 'react';
import { Background, InputWrapper, InputSet, CompleteButton } from 'components/MandalArt';

class Write extends Component {
    render() {
        return (
            <div>
                <Background/>
                <InputWrapper>
                    <InputSet/>
                    <CompleteButton/>
                </InputWrapper>
            </div>
        );
    }
}

export default Write;