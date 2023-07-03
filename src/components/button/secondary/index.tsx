import { BtnClickEvent } from '@/types/base.d'
import cx from 'classnames'
import { ReactNode } from 'react'

interface IProps {
  className?: string
  children: ReactNode
  onClick?: BtnClickEvent
  type?: 'button' | 'submit'
}

export const SecondaryButton = ({ className, children, onClick, type = 'button' }: IProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cx(className,
        'rounded-md bg-transparent py-2 px-3 border-[1px] border-slate-300',
        'hover:bg-slate-200 transition-all duration-300',
        'active:scale-95'
      )}
    >
      {children}
    </button>
  )
}