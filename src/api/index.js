import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const signup = payload=> api.post(`/signup`,payload)
export const login = payload=> api.post(`/login`,payload)
export const resend=(payload)=>api.post('/resend',payload)
export const confirmation=(payload)=>api.post('/confirmation',payload)
export const resetPassword=(payload)=>api.post('/resetpassword',payload)
export const changePassword=(payload)=>api.post('/changepassword',payload)


const apis = {
    signup,login,resend,confirmation,resetPassword,changePassword 
}

export default apis