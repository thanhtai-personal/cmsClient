import AdminContainer from 'root/features/admin/containers/admin'

const authRoutes = [
  {
    key: 'admin',
    path: '/admin',
    isExact: true,
    component: AdminContainer,
    isMultitheme: true,
    private: true
  },
  {
    key: 'dashboard',
    path: '/dashboard',
    isExact: true,
    component: AdminContainer,
    private: true
  }
]

export default authRoutes