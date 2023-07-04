import { BtnClickEvent } from '@/types/base.d'
import cx from 'classnames'
import { ReactNode } from 'react'

interface IProps {
  className?: string
  children: ReactNode
  onClick?: BtnClickEvent
  type?: 'button' | 'submit'
  disabled?: boolean
}

export const PrimaryButton = ({ className, children, onClick, type = 'button', disabled }: IProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cx(className,
        ' py-3 px-8  rounded-md bg-black text-white',
        ' transition-all duration-300',
        { 'hover:shadow-2xl active:scale-95': !disabled },
        { 'cursor-not-allowed': disabled }
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}