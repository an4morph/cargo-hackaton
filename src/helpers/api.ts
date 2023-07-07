import { UserTypes } from '@/types/base'
import { CompanyModel, DriverModel, JobModel, ShipperModel } from '@/types/models.d'

export const API_URL = 'http://34.89.184.248/api/v1'

const url = (route: string) => `${API_URL}${route}`

const simpleGet = (route: string, errorText?: string) => fetch(url(route))
  .then((res) => {
    if (!res.ok) throw new Error(errorText || 'Fetch error')
    return res.json()
  })

type LoginResponse = {
  token: {
    access: string
    refresh: string
  },
  profile: [number, UserTypes]
}
export const login = (body: { email: string, password: string }) => fetch(url('/account/login/'), {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => {
  if (!res.ok) throw new Error('Login fetch error')
  return res.json()
}).then(({ token, profile }: LoginResponse) => {
  localStorage.setItem('token', token.access)
  localStorage.setItem('userId', profile[0].toString())
  localStorage.setItem('userRole', profile[1].toString())
  return {
    id: profile[0],
    role: profile[1],
  }
})

export const signup = (role: string, body: { email: string, password: string }) => fetch(url(`/account/register/${role}/`), {
  method: 'POST',
  body: JSON.stringify({ ...body, password_confirm: body.password }),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => {
  if (!res.ok) throw new Error('Signup fetch error')
  return res.json()
})

const secureGet = (route: string) => fetch(url(route), {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
})
  .then((res) => {
    if (!res.ok) throw new Error('Login fetch error')
    return res.json()
  })

export const securePost = <T>(route: string, data: T, errorText?: string) => fetch(url(route), {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})
  .then((res) => {
    if (!res.ok) throw new Error(errorText || 'Fetch error')
    return res.json()
  })

export const securePut = <T>(route: string, data?: T, errorText?: string) => fetch(url(route), {
  method: 'PUT',
  body: data ? JSON.stringify(data) : null,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})
  .then((res) => {
    if (!res.ok) throw new Error(errorText || 'Fetch error')
    return res.json()
  })

export const getDriverProfile = (id: string | number): Promise<DriverModel> => secureGet(`/profile/${id}`)
export const getCompanyProfile = (id: string | number): Promise<CompanyModel> => simpleGet(`/profile/company/${id}`)
export const getShipperProfile = (id: string | number): Promise<ShipperModel> => simpleGet(`/profile/shipper/${id}`)


export const editShipperProfile = (id: string | number, data: Partial<ShipperModel>) =>
  securePut<Partial<ShipperModel>>(`/profile/shipper/${id}/`, data)
export const editDriverProfile = (id: string | number, data: Partial<DriverModel>) =>
  securePut<Partial<ShipperModel>>(`/profile/${id}/`, data)
export const editCompanyProfile = (id: string | number, data: Partial<CompanyModel>) =>
  securePut<Partial<ShipperModel>>(`/profile/company/${id}/`, data)
export const editJob = (id: string | number, data: Partial<JobModel>) =>
  securePut<Partial<JobModel>>(`/job/${id}/`, data)

export const takeJob = (id: string | number, data: Partial<JobModel>) =>
  securePut(`/job/${id}/order/`, data)

export const getJobs = () => secureGet('/job/')
export const getJobItem = (id: string | number) => secureGet(`/job/${id}/`)
export const getJobsHistory = () => secureGet('/job/history/')

export const createJob = (data: Partial<JobModel>) => securePost('/job/', data)