import { isDateValid } from '@/helpers/date'
import cx from 'classnames'
import dateFormat from 'dateformat'

interface IProps {
  className?: string
  address: string
  date: string
}

export const DestinationInfo = ({ className, address, date }: IProps): JSX.Element => {
  return (
    <div className={cx(className,
      'font-medium flex flex-col w-[100px]',
      'bg-slate-100 px-4 py-2 rounded-lg'
    )}
    >
      <address
        className="not-italic text-sm text-ellipsis overflow-hidden"
        style={{
          width: '-webkit-fill-available',
        }}
      >{address}</address>
      <time className="text-2xl text-slate-500">{isDateValid(date) ? dateFormat(date, 'ddd d') : '??? ?'}</time>
      <time>{isDateValid(date) ? dateFormat(date, 'mmm yyyy') : '??? ????'}</time>
    </div>
  )
}