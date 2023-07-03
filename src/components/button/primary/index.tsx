import { BtnClickEvent } from '@/types/base.d'
import cx from 'classnames'
import { ReactNode } from 'react'

interface IProps {
  className?: string
  children: ReactNode
  onClick?: BtnClickEvent
}

export const PrimaryButton = ({ className, children, onClick }: IProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={cx(className,
        'bg-black py-3 px-8 text-white',
        'hover:shadow-2xl transition-all duration-300',
        'active:scale-95'
      )}
    >
      {children}
    </button>
  )
}