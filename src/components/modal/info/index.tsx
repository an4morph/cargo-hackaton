'use client'

import { IBaseModalProps, TextTags } from '@/types/base.d'
import { Modal } from '@/components/modal/base'
import { ReactNode } from 'react'
import { IoCloseOutline, IoInformationCircleOutline } from 'react-icons/io5'
import cx from 'classnames'
import { IconButton } from '@/components/button/icon'

interface IProps extends IBaseModalProps {
  title: ReactNode
}

const Title = ({ children, tag: Tag = 'h2' }: { children: ReactNode, tag?: TextTags }): JSX.Element => (
  <Tag className="text-sm font-bold">{children}</Tag>
)

export const InfoModal = ({ title, children, className, onClose, ...rest }: IProps): JSX.Element => {
  return (
    <Modal {...{ onClose, ...rest }} className={cx(className, 'p-4')}>
      <div className="flex items-center justify-between mb-4">
        {
          typeof title === 'string'
            ? (
              <div className="flex items-center text-slate-400">
                <IoInformationCircleOutline className="mr-2" />
                <Title>{title}</Title>
              </div>
            )
            : <Title>{title}</Title>
        }

        <IconButton onClick={onClose}>
          <IoCloseOutline />
        </IconButton>
      </div>
      {children}
    </Modal>
  )
}