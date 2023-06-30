import { BtnClickEvent } from '@/types/base.d'
import cx from 'classnames'
import { ReactNode } from 'react'

interface IProps {
  className?: string
  children: ReactNode
  onClick?: BtnClickEvent
  type?: 'button' | 'submit'
}

export const PrimaryButton = ({ className, children, onClick, type = 'button' }: IProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cx(className,
        'rounded-md bg-brand-500 py-2 px-3 text-white',
        'hover:bg-brand-600 transition-all duration-300',
        'active:scale-95'
      )}
    >
      {children}
    </button>
  )
}