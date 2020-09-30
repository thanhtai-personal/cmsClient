export const authApiNames = {
  login: 'login',
  register: 'register',
  getAuthData: 'getAuthData',
  googleLogin: 'googleLogin'
}

const authApi = [
  {
    method: 'post',
    name: authApiNames.login,
    path: '/auth/login',
  },{
    method: 'post',
    name: authApiNames.register,
    path: '/auth/register',
  },{
    method: 'get',
    name: authApiNames.getAuthData,
    path: '/auth/get',
  },{
    method: 'post',
    name: authApiNames.googleLogin,
    path: '/auth/google',
  }
]

export default authApi