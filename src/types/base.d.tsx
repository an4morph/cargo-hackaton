import { MouseEvent, ReactNode } from 'react'

export type BtnClickEvent = (e: MouseEvent<HTMLButtonElement>) => void

export interface IBaseModalProps {
  className?: string
  overlayClassName?: string
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  notCloseOnOverlay?: boolean
}

export type TextTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export interface LoginFormData {
  email: string
  password: string
}