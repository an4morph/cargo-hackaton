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
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Отправка №{data.id}</h1>

      <div className="flex">
        <div>
          <div className="mb-2">
            <span className="font-bold">Status:</span>
            &nbsp;{data?.status}
          </div>
          <div className="mb-2">
            <span className="font-bold">From:</span>
            &nbsp;New York, NY
          </div>
          <div className="mb-4">
            <span className="font-bold">To:</span>
            &nbsp;New Castle, DE
          </div>
          <p className="mb-6">
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
          </p>
        </div>

        <div className="w-1/5 min-w-[20%] paper p-4 ml-6 self-start">
          <h2 className="text-lg font-bold mb-4">Driver block</h2>
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