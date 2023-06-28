'use client'
import { IBaseModalProps } from '@/types/base.d'
import cx from 'classnames'

export const Sidebar = ({
  className,
  overlayClassName,
  isOpen,
  onClose,
  children,
  notCloseOnOverlay = false,
}: IBaseModalProps): JSX.Element | null => {
  return (
    <div
      className={cx(overlayClassName,
        'fixed top-0 left-0 w-screen h-screen transition-all duration-200 z-10',
        'flex justify-end',
        {
          'bg-[#00000066] visible': isOpen,
          'bg-[#00000000] invisible': !isOpen,
        }
      )}
      onClick={notCloseOnOverlay ? () => null : onClose}
    >
      <div
        className={cx(className,
          'fixed bg-white z-10 h-full transition-all',
          'w-4/5 md:w-[250px] relative',
          {
            'opacity-100 translate-x-0 visible': isOpen,
            'opacity-0 translate-x-[100px] invisible': !isOpen,
          }
        )}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}