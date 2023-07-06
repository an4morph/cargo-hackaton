'use client'
import { PrimaryButton } from '@/components/button/primary'
import Link from 'next/link'
import { useGetJobs } from '@/helpers/hooks/useGetJobs'
import ShipperDashboardPageContent from './components/content'
import { ErrorText } from '@/components/error'


const ShipperDashboardPage = (): JSX.Element | null => {
  const { data, loading, error } = useGetJobs()

  return (
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
    </div>
  )
}

export default ShipperDashboardPage