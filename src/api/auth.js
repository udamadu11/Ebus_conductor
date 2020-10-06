import client from './client';

const login = (email, password) => client.post('/auth/conductor/login', { email, password });
const forgetpassword = (email) => client.post('/auth/conductor/forgetpassword', { email });
const verify = (code,email) => client.post('/auth/forgetpassword/verify', { code, email });
const resetpassword = (id, newpassword, confirmpassword) => client.post('/auth/resetpassword', {id, newpassword, confirmpassword } );

export default {
    login,
    forgetpassword,
    verify,
    resetpassword
}