import { BtnClickEvent } from '@/types/base.d'
import cx from 'classnames'
import { ReactNode } from 'react'

interface IProps {
  className?: string
  children: ReactNode
  onClick?: BtnClickEvent
}

export const IconButton = ({ className, children, onClick }: IProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={cx(className, '[&>svg]:w-[24px] [&>svg]:h-[24px] hover:text-slate-500 p-1')}
    >
      {children}
    </button>
  )
}