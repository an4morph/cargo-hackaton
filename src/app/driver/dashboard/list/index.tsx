'use client'

import { ShipmentStatuses } from '@/types/base.d'
import { observer } from 'mobx-react-lite'
import { ShipmentItem } from '@/components/shipment-item'
import { RadioGroup } from '@/components/filter-radio-group'
import { useState } from 'react'

interface IProps {
  list: any[]
}

export const ActiveShipmentsList = observer(({ list }: IProps): JSX.Element => {
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
          list
            .filter(item => {
              if (filterValue === 'all') return true
              return item.status === filterValue
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
  )
})