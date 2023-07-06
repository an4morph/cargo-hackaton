'use client'
import { PrimaryButton } from '@/components/button/primary'
import { ProfileReminder } from '@/components/profile-reminder/page'
import { ShipmentStatuses, UserTypes } from '@/types/base.d'
import notificatons from '@/store/notifications'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import { ShipmentItem } from '@/components/shipment-item'
import { mockShipments } from './mockData'
import { RadioGroup } from '@/components/filter-radio-group'
import { useState } from 'react'
import { useGetJobs } from '@/helpers/hooks/useGetJobs'


const ShipperDashboardPage = observer((): JSX.Element | null => {
  const [filterValue, setFilterValue] = useState<ShipmentStatuses | 'all'>('all')
  const { data, loading, error } = useGetJobs()

  console.log({ data, loading, error })

  // if (!data) return null

  const onChange = (value: ShipmentStatuses | 'all') => {
    setFilterValue(value)
  }

  return (
    <div className="responsive py-10">
      <div className="flex justify-between">
        <h1 className="text-xl mb-4">My shipments ({mockShipments.length})</h1>
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
            mockShipments
              .filter(s => {
                if (filterValue === 'all') return true
                return s.status === filterValue
              })
              .map(s => (
                <ShipmentItem
                  className="mb-4"
                  driverInfo={s.driverInfo}
                  description={s.description}
                  wayPercentage={s.wayPercentage}
                  fromDate={s.fromDate}
                  toDate={s.toDate}
                  status={s.status}
                  locationFrom={s.locationFrom}
                  locationTo={s.locationTo}
                  id={s.id}
                  key={s.id}
                />))
          }
        </ul>
      </div>

      {notificatons.showProfileFillNotice && <ProfileReminder userType={UserTypes.shipper} />}
    </div>
  )
})

export default ShipperDashboardPage