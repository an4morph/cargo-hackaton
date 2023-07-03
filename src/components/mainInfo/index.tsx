import React from 'react'

export const MainInfo = () => {
  return (
    <div className="flex-col w-1/3 items-center bg-white p-10 rounded-xl">
      <h2 className="text-3xl font-bold my-4">Main Info</h2>
      <div className="[&>p]:mb-4 text-1xl flex-col gap-x-10">
        <h4 className="text-1xl font-bold my-4">Location:<span className="font-normal"> Arizona</span></h4>
        <h4 className="text-1xl font-bold my-4">Truck:<span className="font-normal"> KENWORTH W 900</span></h4>
        <h4 className="text-1xl font-bold my-4">Orders:<span className="font-normal"> 23</span></h4>
        <h4 className="text-xl font-bold my-4">Raiting:<span className="font-normal"> 67 <span className="font-bold">/</span> 100</span></h4>
      </div>
    </div>
  )
}

