import { ShipmentStatuses } from '@/types/base.d'
import classNames from 'classnames'
import { GrStatusCriticalSmall } from 'react-icons/gr'

interface IProps {
  className?: string
  status: ShipmentStatuses
}

export const StatusBox = ({ className, status }: IProps): JSX.Element => {
  return (
    <div className={classNames(className,
      'px-3 py-1 rounded-full text-sm flex items-center w-fit text-slate-600 font-bold',
      {
        'bg-yellow-200': status === ShipmentStatuses.wait,
        'bg-slate-200': status === ShipmentStatuses.load,
        'bg-sky-200': status === ShipmentStatuses.delivering,
        'bg-green-200': status === ShipmentStatuses.done,
      }
    )}
    >
      <GrStatusCriticalSmall className="mr-2" />
      {status}
    </div>
  )
}