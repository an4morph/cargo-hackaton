import cx from 'classnames'
import style from './style.module.css'
import { BsBoxSeam } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserTie, FaCheck } from 'react-icons/fa'
import { UseFormRegister } from 'react-hook-form'
import { SignUpFormData } from '@/types/base.d'
import { ErrorText } from '../error'

interface IProps {
  className?: string
  register: UseFormRegister<SignUpFormData>
  error?: string
}

const options = [
  {
    value: 'shipper',
    text: 'I am Shipper',
    icon: <BsBoxSeam />,
  },
  {
    value: 'driver',
    text: 'I am Driver',
    icon: <TbTruckDelivery />,
  },
  {
    value: 'company',
    text: 'I am Company representative',
    icon: <FaUserTie />,
  },
]

export const UserTypeRadioGroup = ({ className, register, error }: IProps): JSX.Element => {
  return (
    <fieldset className={cx(className, '')}>
      {
        options.map(({ value, text, icon }) => (
          <div className={style.field} key={value}>
            <input
              type="radio"
              id={value}
              value={value}
              {...register('userType', {
                required: 'You should choose one of the type',
              })}
            />
            <label htmlFor={value}>
              {icon}
              <span>{text}</span>
              <FaCheck className={style.check} />
            </label>
          </div>
        ))
      }
      {error && <ErrorText className="pt-2">{error}</ErrorText>}
    </fieldset>
  )
}