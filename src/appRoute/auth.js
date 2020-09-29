import LoginComponent from 'root/features/auth/components/login'
import RegisterComponent from 'root/features/auth/components/register'

const authRoutes = [
  {
    key: 'login',
    path: '/login',
    isExact: true,
    component: LoginComponent,
    isMultitheme: true
  },
  {
    key: 'register',
    path: '/register',
    isExact: true,
    component: RegisterComponent,
    isMultitheme: true
  }
]

export default authRoutes