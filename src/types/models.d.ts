import { ShipmentStatuses } from './base'

export interface CompanyModel {
  id: string | number
  name: string
  image: string
}

export interface DriverModel {
  billing_address :string
  bio:string
  car:object
  company_driver:boolean
  driver:boolean
  first_name:string
  id:string | number
  image:string
  last_name:string
  mc_dot_number:string
  phone:string
  shipper:boolean
  user:string
  username:string
}

export interface ShipperModel {
  id: string | number
  first_name: string
  last_name: string
  image: string
}

export interface JobModel {
  id: string | number
  owner: string
  title: string
  pickup_location:string
  pickup_date: string
  delivery_date: string
  destination_location:string
  weight_of_goods: string
  type_of_goods: string
  required_equipment:string
  special_instruction:string
  driver_id:string | number
  status: ShipmentStatuses
  activation_code:string
  complete_code: string
  cancel_code:string
  started_at:string
  is_confirm:boolean
}