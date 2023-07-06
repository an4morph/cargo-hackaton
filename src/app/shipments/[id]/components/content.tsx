'use client'
import { PrimaryButton } from '@/components/button/primary'
import dateFormat from 'dateformat'
import { JobModel } from '@/types/models'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  data: JobModel
}


export const ShimpmentPageContent = ({ data }: IProps): JSX.Element => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Order №{data.id}</h1>
        {
          localStorage.getItem('userId') === data.owner.toString() && (
            <Link href={`/shipments/${data.id}/edit`}>
              <PrimaryButton>Edit</PrimaryButton>
            </Link>
          )
        }
      </div>
      <h2 className="text-1xl font-bold mb-4 text-slate-400">{data.title}</h2>
      <div>
        <div>
          <div className="flex gap-x-10">
            <div className="w-1/2">
              <Image
                width="400"
                height="400"
                className="object-cover w-full"
                alt="driver avatar"
                src="/shipment-map.png"
              />
            </div>
            <div className="w-1/2 paper p-8">
              <div className="mb-2">
                <span className="font-bold">Status:</span>
              &nbsp;{data?.status}
              </div>
              <div className="mb-2">
                <span className="font-bold">From:</span>
              &nbsp;{data.pickup_location}
              </div>
              <div className="mb-4">
                <span className="font-bold">To:</span>
              &nbsp;{data.destination_location}
              </div>
              <div className="mb-4">
                <span className="font-bold">Pickup Date:</span>
              &nbsp;{dateFormat(data.pickup_date, 'dd-mm-yyyy')}
              </div>
              <div className="mb-4">
                <span className="font-bold">Delivery Date:</span>
              &nbsp;{dateFormat(data.delivery_date, 'dd-mm-yyyy')}
              </div>
              <div className="mb-4">
                <span className="font-bold">Type Of Goods:</span>
              &nbsp;{data.type_of_goods}
              </div>
              <div className="mb-4">
                <span className="font-bold">Weight Of Goods:</span>
              &nbsp;{data.weight_of_goods}
              </div>
              {
                data.special_instruction && (
                  <div className="mb-4">
                    <span className="font-bold">Special Instruction:</span>
              &nbsp;{data.special_instruction}
                  </div>
                )
              }
              <div className="mb-4">
                <span className="font-bold">Required Equipment:</span>
              &nbsp;{data.required_equipment}
              </div>
            </div>
            <div className="w-1/5 min-w-[20%] paper p-8 self-start">

              <h2 className="text-lg font-bold mb-4">Driver info</h2>
              {
                data.driver_id
                  ? (
                    <Link href={`/driver/profile/${data.driver_id}`}>
                      <PrimaryButton>Show driver profile</PrimaryButton>
                    </Link>
                  ) : (
                    <p className="text-slate-500">No driver found for this order yet</p>
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}