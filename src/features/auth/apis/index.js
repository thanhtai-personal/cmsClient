export const authApiNames = {
  login: 'login',
  register: 'register',
  getAuthData: 'getAuthData'
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
  }
]

export default authApi