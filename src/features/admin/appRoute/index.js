import LoginComponent from 'root/features/auth/components/login'
import RegisterComponent from 'root/features/auth/components/register'

const authRoutes = [
  {
    key: 'admin',
    path: '/admin',
    isExact: true,
    component: LoginComponent,
    isMultitheme: true,
    private: true
  },
  {
    key: 'dashboard',
    path: '/admin/dashboard',
    isExact: true,
    component: RegisterComponent,
    isMultitheme: true,
    private: true
  }
]

export default authRoutes