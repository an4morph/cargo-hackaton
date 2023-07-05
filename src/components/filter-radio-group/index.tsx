import cx from 'classnames'
import { ShipmentStatuses } from '@/types/base'

interface IProps {
  className?: string
  name: string
  options: { value: ShipmentStatuses | 'all', text: string }[]
  commonValue: ShipmentStatuses | 'all'
  onChange: (x: ShipmentStatuses | 'all') => void
}

export const RadioGroup = ({ className, options, name, commonValue, onChange }: IProps): JSX.Element => {
  return (
    <fieldset className={cx(className, '')}>
      {
        options.map(({ value, text }) => (
          <div key={value} className="cursor-pointer">
            <input
              type="radio"
              id={value}
              value={value}
              name={name}
              checked={value === commonValue}
              onChange={() => onChange(value)}
            />
            <label htmlFor={value} className="ml-2">
              <span>{text}</span>
            </label>
          </div>
        ))
      }
    </fieldset>
  )
}