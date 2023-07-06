import { ShipmentItemRecommended } from '@/components/shipment-item-recommended'
import { JobModel } from '@/types/models'
import cx from 'classnames'

interface IProps {
  className?: string
  list: JobModel[]
}

export const DriverJobs = ({ className, list }: IProps): JSX.Element => {
  return (
    <div className={cx(className, 'flex gap-4 mb-8')}>
      {
        list.map(s => (
          <ShipmentItemRecommended
            className="w-1/2 md:w-1/3 lg:w-1/4 "
            driverId={s.driver_id}
            description={s.title}
            fromDate="12.12.2022"
            toDate="10.11.2023"
            status={s.status}
            locationFrom={s.pickup_location}
            locationTo={s.destination_location}
            id={s.id}
            key={s.id}
            fullObj={s}
          />))
      }
    </div>
  )
}