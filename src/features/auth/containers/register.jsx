import React, { Suspense } from 'react'
import LoadingComponent from 'root/components/loading'

const RegisterComponent = React.lazy(() => import('root/features/auth/components/register'))

const RegisterContainer = (props) => {
  return (
    <Suspense fallback={LoadingComponent}>
      <RegisterComponent {...props}/>
    </Suspense>
  )
}

export default RegisterContainer