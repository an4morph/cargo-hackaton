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

export enum UserTypes {
  shipper = 'shipper',
  driver = 'driver',
  company = 'company'
}

export interface CompanyModel {
  id: string | number
  name: string
  image: string
}

export interface DriverModel {
  id: string | number
  first_name: string
  last_name: string
  image: string
}

export interface ShipperModel {
  id: string | number
  first_name: string
  last_name: string
  image: string
}