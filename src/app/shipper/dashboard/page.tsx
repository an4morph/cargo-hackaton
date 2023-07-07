'use client'
import { PrimaryButton } from '@/components/button/primary'
import Link from 'next/link'
import { useGetJobs } from '@/helpers/hooks/useGetJobs'
import ShipperDashboardPageContent from './components/content'
import { ErrorText } from '@/components/error'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ProfileReminder } from '@/components/profile-reminder/page'


const ShipperDashboardPage = (): JSX.Element | null => {
  const { data, loading, error } = useGetJobs()
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('userRole') === 'driver') {
      router.push('/driver/dashboard')
    }
  }, [router])

  return localStorage.getItem('userRole') === 'shipper' ? (
    <div className="responsive py-10">
      <div className="flex justify-between">
        <h1 className="text-xl mb-4">My shipments</h1>
        <Link href="/shipments/new">
          <PrimaryButton>New shipment</PrimaryButton>
        </Link>
      </div>

      {(loading || (!data && !error)) && <div>Loading...</div>}
      {error && <ErrorText>{error}</ErrorText>}
      {data && <ShipperDashboardPageContent data={data.results} />}
      {!localStorage.getItem('notify') && <ProfileReminder />}
    </div>
  ) : null
}

export default ShipperDashboardPage