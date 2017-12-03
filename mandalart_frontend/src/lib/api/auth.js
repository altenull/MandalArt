import axios from 'axios';

export const checkEmailExists = (email) => axios.get('/api/v1.0/auth/exists/email/' + email);
export const checkNicknameExists = (nickname) => axios.get('/api/v1.0/auth/exists/nickname/' + nickname);

export const localRegister = ({email, nickname, password}) => axios.post('/api/v1.0/auth/register/local', { email, nickname, password });
export const localLogin = ({email, password}) => axios.post('/api/v1.0/auth/login/local', { email, password });

export const checkStatus = () => axios.get('/api/v1.0/auth/check');
export const logout = () => axios.post('/api/v1.0/auth/logout');