'use client'
import { PrimaryButton } from '@/components/button/primary'
import { SecondaryButton } from '@/components/button/secondary'
import { JobModel } from '@/types/models'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  data: JobModel
}


export const ShimpmentPageContent = ({ data }: IProps): JSX.Element => {
  console.log(data)
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Order №{data.id}</h1>
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
              &nbsp;{
                  data.pickup_location
                }
              </div>
              <div className="mb-4">
                <span className="font-bold">To:</span>
              &nbsp;{data.destination_location}
              </div>
              <div className="mb-4">
                <span className="font-bold">Pickup Date:</span>
              &nbsp;{data.pickup_date}
              </div>
              <div className="mb-4">
                <span className="font-bold">Pickup Location:</span>
              &nbsp;{data.pickup_location}
              </div>
              <div className="mb-4">
                <span className="font-bold">Type Of Goods:</span>
              &nbsp;{data.type_of_goods}
              </div>
              <div className="mb-4">
                <span className="font-bold">Weight Of Goods:</span>
              &nbsp;{data.weight_of_goods}
              </div>
              <div className="mb-4">
                <span className="font-bold">Special Instruction:</span>
              &nbsp;{data.special_instruction}
              </div>
              <div className="mb-4">
                <span className="font-bold">Required Equipment:</span>
              &nbsp;{data.required_equipment}
              </div>
              {/* <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum maxime incidunt
              doloribus natus, dolores aliquam commodi ex suscipit sed molestias distinctio quaerat repudiandae
              reiciendis saepe quidem rem harum deleniti facilis voluptates facere. Eaque eveniet quo quos eligendi
              tempore, voluptatem dolore labore veritatis fugit tenetur pariatur corrupti sunt magnam totam necessitatibus
              aut sint perspiciatis hic aperiam maxime inventore dolores ratione nulla voluptate! Tenetur ipsa perferendis
              amet, odit maiores in dolorem numquam veniam repellendus, ab excepturi aliquam dolorum eius nobis veritatis
              error asperiores! Totam labore reprehenderit, eum harum, vel, ratione minima eveniet eligendi accusantium
              consectetur optio rem blanditiis autem repellat rerum.
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus esse quos quasi, ullam ipsam nobis
              et, reprehenderit quibusdam ea ex illo corporis labore magnam repellat nulla! Quis in iure, recusandae
              iste possimus consequatur quasi est inventore necessitatibus quod aliquid deserunt.
              </p> */}
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


      {
        data.driver_id && (
          <div>
            <h2 className="text-xl mb-4 mt-10">Tracking</h2>
            <div className="w-full h-[400px] relative">
              <iframe
                title="result"
                src="http://34.89.184.248/api/v1/job/map/"
              />
            </div>
          </div>
        )
      }
    </>
  )
}