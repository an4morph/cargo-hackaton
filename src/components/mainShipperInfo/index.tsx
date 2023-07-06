import React from 'react'

interface IProps {
  data: any
 }

export const MainShipperInfo = ({ data }: IProps): JSX.Element => {
  return (
    <div className="flex-col w-1/2 items-center bg-white p-10 rounded-xl">
      <h2 className="text-3xl font-bold my-4">Main Info</h2>
      <div className="[&>p]:mb-4 text-1xl flex-col gap-x-10">
        <h4 className="text-1xl font-bold my-4">Location:<span className="font-normal"> Arizona</span></h4>
        {/* <h4 className="text-1xl font-bold my-4">Truck:<span className="font-normal">{data?.car_info.brand ? data.car_info.brand : 'Truck Model'}</span></h4> */}
        <h4 className="text-1xl font-bold my-4">Orders:<span className="font-normal"> 23</span></h4>
        <h4 className="text-xl font-bold my-4">Raiting:<span className="font-normal"> {data.rating} <span className="font-bold">/</span> 10</span></h4>
      </div>
    </div>
  )
}

