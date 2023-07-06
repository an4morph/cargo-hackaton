'use client'
import { PrimaryButton } from '@/components/button/primary'
import { ShipmentStatuses } from '@/types/base.d'
import Link from 'next/link'
import { ShipmentItem } from '@/components/shipment-item'
import { mockShipments } from './mockData'
import { RadioGroup } from '@/components/filter-radio-group'
import { useState } from 'react'
import { useGetJobs } from '@/helpers/hooks/useGetJobs'


const ShipperDashboardPage = (): JSX.Element | null => {
  const [filterValue, setFilterValue] = useState<ShipmentStatuses | 'all'>('all')
  const { data, loading, error } = useGetJobs()

  console.log({ data, loading, error })

  //if (!data) return null

  const onChange = (value: ShipmentStatuses | 'all') => {
    setFilterValue(value)
  }

  return (
    <div className="responsive py-10">
      <div className="flex justify-between">
        <h1 className="text-xl mb-4">My shipments ({data?.count})</h1>
        <Link href="/shipments/new">
          <PrimaryButton>New shipment</PrimaryButton>
        </Link>
      </div>

      <div className="flex mt-5">
        <div className="paper w-1/5 p-6 h-fit">
          <h2 className="mb-4 font-medium">Filter by status</h2>

          <RadioGroup
            name="filter"
            options={[
              { value: 'all', text: 'All' },
              { value: ShipmentStatuses.wait, text: ShipmentStatuses.wait },
              { value: ShipmentStatuses.load, text: ShipmentStatuses.load },
              { value: ShipmentStatuses.delivering, text: ShipmentStatuses.delivering },
              { value: ShipmentStatuses.done, text: ShipmentStatuses.done },
            ]}
            commonValue={filterValue}
            onChange={onChange}
          />
        </div>
        <ul className="paper ml-4 w-4/5 p-6">
          {
            data?.results
              .filter(s => {
                if (filterValue === 'all') return true
                return s.status === filterValue
              })
              .map(s => (
                <ShipmentItem
                  className="mb-4"
                  driverId={s.driver_id}
                  description={s.title}
                  fromDate={new Date().toLocaleString()}
                  toDate={new Date().toLocaleString()}
                  status={s.status}
                  locationFrom="test"
                  locationTo="test"
                  id={s.id}
                  key={s.id}
                />))
          }
        </ul>
      </div>
    </div>
  )
}

export default ShipperDashboardPage