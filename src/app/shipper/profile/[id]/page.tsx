'use client'
import Image from 'next/image'
import Link from 'next/link'
import { PrimaryButton } from '@/components/button/primary'
import { MainShipperInfo } from '@/components/mainShipperInfo'
import { useGetShipper } from '@/helpers/hooks/useGetShipper'


interface IProps {
  params: {
    id: string
  }
}

export default function ProfileShipperPage({ params: { id } }: IProps): JSX.Element | null {
  const { data, loading, error } = useGetShipper(id)

  if (!data) return null
  return (
    <div className="responsive py-10">
      <div className="flex justify-between">
        <div className="flex w-2/3 gap-x-6">
          <Link href="/home/driver.jpg">
            <Image
              width="200"
              height="200"
              className="object-cover"
              alt="driver avatar"
              src={data.image || '/user.jpeg'}
            />
          </Link>
          <div className="flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold">{data.first_name} {data.last_name}</h1>
              <span className="font-black text-green-800 mb-5">(Shipper)</span>
            </div>
            <div className="flex mt-8 gap-x-5 w-full">
              <Link href="/chat/1">
                <PrimaryButton className="bg-gray-500 hover:bg-black">Message</PrimaryButton>
              </Link>
              {
                localStorage.getItem('userId') === id && (
                  <Link href={`/shipper/profile/${id}/edit`}>
                    <PrimaryButton className="bg-gray-500 hover:bg-black">Edit</PrimaryButton>
                  </Link>
                )
              }
            </div>
          </div>
        </div>
      </div>

      <div className="flex my-10 justify-evenly gap-x-5">
        <MainShipperInfo data={data} />
      </div>
      <div />
    </div>
  )
}