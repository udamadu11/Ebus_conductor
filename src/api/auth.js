import client from './client';

const login = (email, password) => client.post('/auth/conductor/login', { email, password });

export default {
    login
}