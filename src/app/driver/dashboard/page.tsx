'use client'

import { ProfileReminder } from '@/components/profile-reminder/page'
import { UserTypes } from '@/types/base.d'
import { observer } from 'mobx-react-lite'
import { mockShipments } from './mockData'
import { ActiveShipmentsList } from './list'
import { DriverJobs } from './jobs'
import { useGetJobs } from '@/helpers/hooks/useGetJobs'
import { useGetJobsHistory } from '@/helpers/hooks/useGetJobsHistory'

const DriverDashboardPage = observer((): JSX.Element | null => {
  const jobs = useGetJobs()
  const history = useGetJobsHistory()

  console.log(jobs, history)

  if (!jobs || !history) return null

  return (
    <div className="responsive py-10">
      <h2 className="text-xl mb-4">New recommended jobs</h2>
      <DriverJobs list={mockShipments.slice(-4)} />

      <h2 className="text-xl mb-4">My shipments ({mockShipments.length})</h2>
      <ActiveShipmentsList list={mockShipments} />

      {Boolean(!localStorage.getItem('notify')) && <ProfileReminder />}
    </div>
  )
})

export default DriverDashboardPage