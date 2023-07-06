import { ShipperModel } from '@/types/models'
import React from 'react'

interface IProps {
  data: ShipperModel
 }

export const MainShipperInfo = ({ data }: IProps): JSX.Element => {
  return (
    <div className="flex-col w-full items-center paper p-8 rounded-xl">
      <h2 className="text-2xl font-bold my-4">Main Info</h2>
      <div className="[&>p]:mb-4 text-1xl flex-col gap-x-10">
        <h4 className="text-1xl font-bold my-4">Location:<span className="font-normal"> {data.billing_address}</span></h4>
        <h4 className="text-1xl font-bold my-4">Orders:<span className="font-normal"> 3</span></h4>
        <h4
          className="text-xl font-bold my-4"
        >
            Raiting: <span className="font-medium text-base">10 / 10</span>
        </h4>
        <h4 className="text-1xl font-bold my-4">Email:<span className="font-normal"> {data.phone}</span></h4>
        <h4 className="text-1xl font-bold my-4">Phone:<span className="font-normal"> {data.user}</span></h4>
      </div>
    </div>
  )
}

