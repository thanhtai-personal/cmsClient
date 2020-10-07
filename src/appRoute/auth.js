import LoginContainer from 'root/features/auth/containers/login'
import RegisterContainer from 'root/features/auth/containers/register'

const authRoutes = [
  {
    key: 'login',
    path: '/',
    isExact: true,
    component: LoginContainer,
    isMultitheme: true
  },
  {
    key: 'login',
    path: '/login',
    isExact: true,
    component: LoginContainer,
    isMultitheme: true
  },
  {
    key: 'register',
    path: '/register',
    isExact: true,
    component: RegisterContainer,
    isMultitheme: true
  }
]

export default authRoutes