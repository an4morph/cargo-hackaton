import cx from 'classnames'
import { ReactNode } from 'react'
import { IoWarning } from 'react-icons/io5'

interface IProps {
  className?: string
  children: ReactNode
  noIcon?: boolean
}

export const ErrorText = ({ className, children, noIcon }: IProps): JSX.Element => {
  return (
    <div className={cx(className, 'text-red-500 text-sm')}>
      {!noIcon && <IoWarning className="mr-1 inline-block" />}
      {children}
    </div>
  )
}