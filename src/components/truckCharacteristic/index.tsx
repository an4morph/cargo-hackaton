import React from 'react'
import Image from 'next/image'


export const TruckCharacteristic = () => {
  return (
    <div className="w-full">
      <div className="flex-col w-full bg-white">
        <h2 className="text-3xl font-bold my-4">Trucks characteristic</h2>
        <div className="flex justify-between mb-10">
          <div>
            <h3 className="text-1xl font-black text-center">Euro-Truck</h3>
            <Image
              width="250"
              height="250"
              className="object-cover"
              alt="company avatar"
              src="/home/euroo.jpg"
            />
          </div>
          <div>
            <h3 className="text-1xl font-black text-center">Container</h3>
            <Image
              width="250"
              height="250"
              className="object-cover"
              alt="company avatar"
              src="/home/container.jpg"
            />
          </div>
          <div>
            <h3 className="text-1xl font-black text-center">Tank</h3>
            <Image
              width="250"
              height="250"
              className="object-cover"
              alt="company avatar"
              src="/home/cistern.jpg"
            />
          </div>
          <div>
            <h3 className="text-1xl font-black text-center">Refrigerator</h3>
            <Image
              width="250"
              height="250"
              className="object-cover"
              alt="company avatar"
              src="/home/refrej.jpg"
            />
          </div>
        </div>
        <div className="flex gap-x-5 justify-between w-full">
          <div className="w-full">
            <Image
              width="550"
              height="350"
              className="object-cover w-full"
              alt="driver avatar"
              src="/home/kenwood.jpg"
            />
          </div>
          <table className="w-full border-collapse ">
            <tbody>
              <tr className="w-full">
                <td className="border-solid border-2 border-gray-400 py-2 px-10 w-full">Year of release</td>
                <td className="border-solid border-2 border-gray-400 py-2 px-10 w-full">2005</td>
              </tr>
              <tr>
                <td className="border-solid border-2 border-gray-400 py-2 px-10 w-full bg-gray-300">Body type</td>
                <td className="border-solid border-2 border-gray-400 py-2 px-10 w-full bg-gray-300">Truck</td>
              </tr>
              <tr>
                <td className="border-solid border-2 border-gray-400 py-2 px-10 w-full">Length,</td>
                <td className="border-solid border-2 border-gray-400 py-2 px-10 w-full">mm 8000</td>
              </tr>
              <tr>
                <td className="border-solid border-2 border-gray-400 py-2 px-10 w-full bg-gray-300">Width,</td>
                <td className="border-solid border-2 border-gray-400 py-2 px-10 w-full bg-gray-300">mm 2700</td>
              </tr>
              <tr>
                <td className="border-solid border-2 border-gray-400 py-2 px-10 w-full">Height,</td>
                <td className="border-solid border-2 border-gray-400 py-2 px-10 w-full">mm 4000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

