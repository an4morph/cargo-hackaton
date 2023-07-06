'use client'

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
      <DriverJobs list={jobs?.data?.results || []} />

      <h2 className="text-xl mb-4">My shipments ({mockShipments.length})</h2>
      <ActiveShipmentsList list={mockShipments} />
    </div>
  )
})

export default DriverDashboardPage