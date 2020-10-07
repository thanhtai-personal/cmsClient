import React, { Suspense } from 'react'
import LoadingComponent from 'root/components/loading'

const AdminComponent = React.lazy(() => import('root/features/admin/components/admin'))

const AdminContainer = (props) => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <AdminComponent {...props}/>
    </Suspense>
  )
}

export default AdminContainer