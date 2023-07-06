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
      'font-medium flex flex-col w-[110px]',
      'bg-slate-100 px-4 py-2 rounded-lg'
    )}
    >
      <address
        className="not-italic text-sm text-ellipsis overflow-hidden whitespace-nowrap"
        style={{
          width: '-webkit-fill-available',
        }}
      >{address}</address>
      <time className="text-xl text-slate-400 whitespace-nowrap">{isDateValid(date) ? dateFormat(date, 'ddd d') : '??? ?'}</time>
      <time className="whitespace-nowrap">{isDateValid(date) ? dateFormat(date, 'mmm yyyy') : '??? ????'}</time>
    </div>
  )
}