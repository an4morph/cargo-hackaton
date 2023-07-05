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

export enum ShipmentStatuses {
  wait = 'Looking for shipper',
  load = 'Loading goods',
  delivering = 'Delivering',
  done = 'Completed'
}

export enum CarType {
  EuroTrack = 'Euro-Track',
  Container = 'Container',
  Tank = 'Tank',
  Refrigerator ='Refrigerator',
}

export interface DriverCarInfo {
  brand:string
  car_image:string
  car_type:string
  documents:string
  documents_file:null
  equipment:string
  height:number
  id:number
  length:number
  load_capacity:string
  width:number
  year_of_manufacture:number
}