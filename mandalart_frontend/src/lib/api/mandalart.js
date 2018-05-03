import axios from 'axios';

export const mandalartGet = () => axios.get('/api/v1.0/mandalart');
export const mandalartGetOlder = (id) => axios.get(`/api/v1.0/mandalart/older/${id}`);
export const mandalartWrite = ({writer, goal, plans}) => axios.post('/api/v1.0/mandalart/write', {writer, goal, plans});
export const mandalartDelete = (id) => axios.delete(`/api/v1.0/mandalart/${id}`);
export const mandalartStar = ({id, giver}) => axios.post('/api/v1.0/mandalart/star', {id, giver});