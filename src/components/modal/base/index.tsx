'use client'

import { IBaseModalProps } from '@/types/base.d'
import cx from 'classnames'

export const Modal = ({ className, overlayClassName, isOpen, onClose, children }: IBaseModalProps): JSX.Element => {
  return (
    <div
      className={cx(overlayClassName,
        'fixed top-0 left-0 w-screen h-screen transition-all duration-200 z-10',
        'p-4 flex items-center justify-center',
        {
          'bg-[#00000066] visible': isOpen,
          'bg-[#00000000] invisible': !isOpen,
        }
      )}
      onClick={onClose}
    >
      <div
        className={cx(className,
          'fixed paper z-10 transition-all',
          'mx-auto max-w-[800px] w-full relative',
          {
            'opacity-100 translate-y-0 visible': isOpen,
            'opacity-0 translate-y-5 invisible': !isOpen,
          }
        )}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}