import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from 'components/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import * as userActions from 'redux/modules/user';
import storage from 'lib/storage';
import { isEmail, isLength } from 'validator';
import debounce from 'lodash/debounce';

class Register extends Component {

    setError = (message) => {
        const { AuthActions } = this.props;
        AuthActions.setError({
            form: 'register',
            message
        });
    }

    validate = {
        email : (value) => {
            if (!isEmail(value)) {
                this.setError('잘못된 이메일 형식입니다.');
                return false;
            } else {
                this.setError(null);
                return true;
            }
        },
        nickname : (value) => {
            if (!isLength(value, { min: 1, max: 10})) {
                this.setError('닉네임은 1~10자리여야 합니다.');
                return false;
            } else {
                this.setError(null);
                return true;
            }
        },
        password : (value) => {
            if (!isLength(value, { min: 8, max : 15})) {
                this.setError('비밀번호는 8~15자리여야 합니다.');
                return false;
            } else {
                this.setError(null);
                return true;
            }
        }
    };

    checkEmailExists = debounce(async (email) => {
        const { AuthActions } = this.props;

        try {
            await AuthActions.checkEmailExists(email);
            if (this.props.exists.get('email')) {
                this.setError('이미 존재하는 이메일입니다.');
            } else {
                this.setError(null);
            }
        } catch (e) {
            console.log(e);
        }
    }, 300)

    checkNicknameExists = debounce(async (nickname) => {
        const { AuthActions } = this.props;

        try {
            await AuthActions.checkNicknameExists(nickname);
            if (this.props.exists.get('nickname')) {
                this.setError('이미 존재하는 닉네임입니다.');
            } else {
                this.setError(null);
            }
        } catch (e) {
            console.log(e);
        }
    }, 300)

    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            form: 'register',
            name,
            value
        });

        const validation = this.validate[name](value);
        if (name.indexOf('password') > -1 || !validation) return;

        const check = ((name === 'email') ? this.checkEmailExists : this.checkNicknameExists);
        check(value);
    };

    handleLocalRegister = async () => {
        const { form, AuthActions, UserActions, error, history } = this.props;
        const { email, nickname, password } = form.toJS();

        const { validate } = this;

        if (error)
            return;

        if (!validate['email'](email)
            || !validate['nickname'](nickname)
            || !validate['password'](password)) {
            return ;
        }

        try {
            await AuthActions.localRegister({
                email, nickname, password
            });
            const loggedInfo = this.props.result.toJS();

            storage.set('loggedInfo', loggedInfo);
            UserActions.setLoggedInfo(loggedInfo);
            UserActions.setValidated(true);
            history.push('/'); // 회원가입 성공시 홈페이지로 이동
        } catch (e) {
            if (e.response.status === 409) {
                const { key } = e.response.data;
                const message = ((key === 'email') ? '이미 존재하는 이메일입니다.' : '이미 존재하는 닉네임입니다.');
                return this.setError(message);
            }
            this.setError('알 수 없는 에러가 발생했습니다.');
        }
    }

    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('login');
    }

    render() {
        const { error } = this.props;
        const { email, nickname, password } = this.props.form.toJS();
        const { handleChange, handleLocalRegister } = this;

        return (
            <AuthContent title="회원가입">
                <InputWithLabel
                    label="이메일"
                    name="email"
                    placeholder="이메일"
                    value={email}
                    onChange={handleChange}
                />
                <InputWithLabel
                    label="닉네임"
                    name="nickname"
                    placeholder="닉네임"
                    value={nickname}
                    onChange={handleChange}
                />
                <InputWithLabel
                    label="비밀번호"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    value={password}
                    onChange={handleChange}
                />
                {
                    error && <AuthError>{error}</AuthError>
                }
                <AuthButton onClick={handleLocalRegister}>회원가입</AuthButton>
                <RightAlignedLink to="/auth/login">로그인</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form']),
        error: state.auth.getIn(['register', 'error']),
        exists: state.auth.getIn(['register', 'exists']),
        result: state.auth.get('result')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(Register);