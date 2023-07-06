'use client'

import { ActiveShipmentsList } from './list'
import { DriverJobs } from './jobs'
import { useGetJobs } from '@/helpers/hooks/useGetJobs'
import { useGetJobsHistory } from '@/helpers/hooks/useGetJobsHistory'
import { ErrorText } from '@/components/error'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const DriverDashboardPage = (): JSX.Element | null => {
  const jobs = useGetJobs()
  const history = useGetJobsHistory()
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('userRole') === 'shipper') {
      router.push('/shipper/dashboard')
    }
  }, [router])

  if (!jobs || !history) return null

  return localStorage.getItem('userRole') === 'driver' ? (
    <div className="responsive py-10">
      <h2 className="text-xl mb-4">New recommended jobs</h2>
      {(jobs.loading || (!jobs.data && !jobs.error)) && <div className="h-[327px]">Loading...</div>}
      {jobs.error && <ErrorText>{jobs.error}</ErrorText>}
      {jobs.data && <DriverJobs list={jobs.data.results || []} />}

      <h2 className="text-xl mb-4">My shipments</h2>
      {(history.loading || (!history.data && !history.error)) && <div className="h-[200px]">Loading...</div>}
      {history.error && <ErrorText>{history.error}</ErrorText>}
      {history.data && <ActiveShipmentsList list={history.data || []} />}
    </div>
  ) : null
}

export default DriverDashboardPage