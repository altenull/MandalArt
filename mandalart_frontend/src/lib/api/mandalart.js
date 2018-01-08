import axios from 'axios';

export const mandalartGet = () => axios.get('/api/v1.0/mandalart');
export const mandalartWrite = ({writer, goal, plans}) => axios.post('/api/v1.0/mandalart/write', {writer, goal, plans});