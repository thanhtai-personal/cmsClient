import LoginContainer from 'root/features/auth/containers/login'

const authRoutes = [
  {
    key: 'admin',
    path: '/admin',
    isExact: true,
    component: LoginContainer,
    isMultitheme: true,
    private: true
  },
  {
    key: 'dashboard',
    path: '/dashboard',
    isExact: true,
    component: LoginContainer,
    private: true
  }
]

export default authRoutes