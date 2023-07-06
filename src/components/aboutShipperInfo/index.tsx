import React from 'react'

interface IProps {
  data: string
}

export const AboutShipperInfo = ({ data }: IProps): JSX.Element => {
  const shipperInform = 'there should be information about the shipper here'
  return (
    <div className="flex-col w-1/2 items-center bg-white p-10 rounded-xl">
      <h2 className="text-3xl font-bold my-4">About</h2>
      <div className="[&>p]:mb-4 w-5/6 text-1xl flex-col">
        <p>{data ? data : shipperInform}</p>
      </div>
    </div>

  )
}

