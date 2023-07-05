import { ShipmentItemRecommended } from '@/components/shipment-item-recommended'
import cx from 'classnames'

interface IProps {
  className?: string
  list: any[]
}

export const DriverJobs = ({ className, list }: IProps): JSX.Element => {
  return (
    <div className={cx(className, 'flex gap-4 mb-8')}>
      {
        list.map(s => (
          <ShipmentItemRecommended
            className="w-1/2 md:w-1/3 lg:w-1/4 "
            driverInfo={s.driverInfo}
            description={s.description}
            fromDate={s.fromDate}
            toDate={s.toDate}
            status={s.status}
            locationFrom={s.locationFrom}
            locationTo={s.locationTo}
            id={s.id}
            key={s.id}
          />))
      }
    </div>
  )
}