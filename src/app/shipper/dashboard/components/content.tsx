'use client'
import { ShipmentStatuses } from '@/types/base.d'
import { ShipmentItem } from '@/components/shipment-item'
import { RadioGroup } from '@/components/filter-radio-group'
import { useState } from 'react'
import { JobModel } from '@/types/models'


const ShipperDashboardPageContent = ({ data }: { data: JobModel[] }): JSX.Element | null => {
  const [filterValue, setFilterValue] = useState<ShipmentStatuses | 'all'>('all')

  const onChange = (value: ShipmentStatuses | 'all') => {
    setFilterValue(value)
  }

  return (
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
          data
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
                weight={s.weight_of_goods}
              />))
        }
      </ul>
    </div>
  )
}

export default ShipperDashboardPageContent