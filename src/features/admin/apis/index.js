export const adminApiNames = {
  dashboard: 'dashboard',
  products: 'products',
  users: 'users',
  reports: 'reports',
  integrations: 'integrations',
  currentMonth: 'currentMonth',
  lastQuarter: 'lastQuarter',
  yearEndSale: 'yearEndSale'
}

const adminApis = [
  {
    method: 'get',
    name: adminApiNames.dashboard,
    path: '/admin/get',
  },{
    method: 'get',
    name: adminApiNames.products,
    path: '/admin/get',
  },{
    method: 'get',
    name: adminApiNames.users,
    path: '/admin/get',
  },{
    method: 'get',
    name: adminApiNames.reports,
    path: '/admin/get',
  },{
    method: 'get',
    name: adminApiNames.integrations,
    path: '/admin/get',
  },{
    method: 'get',
    name: adminApiNames.currentMonth,
    path: '/admin/get',
  },{
    method: 'get',
    name: adminApiNames.lastQuarter,
    path: '/admin/get',
  },{
    method: 'get',
    name: adminApiNames.yearEndSale,
    path: '/admin/get',
  },
]

export default adminApis