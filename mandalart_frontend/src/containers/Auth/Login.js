import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from 'components/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import * as userActions from 'redux/modules/user';
import storage from 'lib/storage';
import queryString from 'query-string';

class Login extends Component {
    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            form: 'login',
            name,
            value
        });
    }

    handleLocalLogin = async () => {
        const { form, AuthActions, UserActions, history } = this.props;
        const { email, password } = form.toJS();

        try {
            await AuthActions.localLogin({email, password});
            const loggedInfo = this.props.result.toJS();

            UserActions.setLoggedInfo(loggedInfo);
            history.push('/');
            storage.set('loggedInfo', loggedInfo);
        } catch (e) {
            console.log(e);
            this.setError('잘못된 계정정보입니다.');
        }
    }

    handleKeyPress = (e) => {
        if (e.charCode === 13) {
            this.handleLocalLogin();
        }
    }

    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('login');
    }

    setError = (message) => {
        const { AuthActions } = this.props;
        AuthActions.setError({
            form: 'login',
            message
        });
        return false;
    }

    componentDidMount() {
        const { location } = this.props;
        const query = queryString.parse(location.search);

        if (query.expired !== undefined) {
            this.setError('세션이 만료되었습니다. 다시 로그인하세요.');
        }
    }

    render() {
        const { email, password } = this.props.form.toJS();
        const { handleChange, handleKeyPress, handleLocalLogin } = this;
        const { error } = this.props;

        return (
            <AuthContent title="로그인">
                <InputWithLabel
                    label="이메일"
                    name="email"
                    placeholder="이메일"
                    value={email}
                    onChange={handleChange}
                />
                <InputWithLabel
                    label="비밀번호"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
                {
                    error && <AuthError>{error}</AuthError>
                }
                <AuthButton onClick={handleLocalLogin}>로그인</AuthButton>
                <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form']),
        error: state.auth.getIn(['login', 'error']),
        result: state.auth.get('result')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(Login);