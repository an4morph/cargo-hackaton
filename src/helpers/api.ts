export const API_URL = 'http://34.89.184.248/api/v1'

const url = (route: string) => `${API_URL}${route}`

const simpleGet = (route: string) => fetch(url(route))
  .then((res) => {
    if (!res.ok) throw new Error('Login fetch error')
    return res.json()
  })

export const login = (body: { email: string, password: string }) => fetch(url('/account/login/'), {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => {
  if (!res.ok) throw new Error('Login fetch error')
  return res.json()
})

export const getDriverProfile = (id: string | number) => simpleGet(`/profile/driver/${id}`)
export const getCompanyProfile = (id: string | number) => simpleGet(`/profile/company/${id}`)
export const getShipperProfile = (id: string | number) => simpleGet(`/profile/shipper/${id}`)