import { BackButton } from '@/components/button/back'
import { PrimaryButton } from '@/components/button/primary'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  params: {
    id: string
  }
}

export default async function ShimpmentPage({ params: { id } }: IProps): Promise<JSX.Element> {
  return (
    <div className="responsive py-10">
      <BackButton className="mb-4" />
      <h1 className="text-2xl font-bold mb-4">Отправка №{id}</h1>

      <div className="flex">
        <div>
          <div className="mb-2">
            <span className="font-bold">Status:</span>
            &nbsp;On the way
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

        <div className="w-1/5 min-w-[20%] paper p-4 ml-6">
          <h2 className="text-xl mb-4">Your Carrier</h2>
          <div className="w-full aspect-square rounded-full relative overflow-hidden">
            <Image
              fill
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=989&q=80"
              alt="driver"
              className="object-cover"
            />
          </div>

          <div className="mb-1 mt-2">
            <span className="font-bold">Name:</span>
            &nbsp;Steve Clark
          </div>
          <div className="mb-1">
            <span className="font-bold">Cargo:</span>
            &nbsp;Super Delivery
          </div>
          <p>Lorem, ipsum dolor sit amet Magni voluptate quod vel! Provident, molestias ipsa?</p>
          <Link className="mt-4 block" href="/profile/driver/1">
            <PrimaryButton className="w-full">More Info</PrimaryButton>
          </Link>
        </div>
      </div>


      <h2 className="text-xl mb-4 mt-10">Tracking</h2>
      <div className="w-full h-[400px] relative">
        <Image
          fill
          src="/shipment-map.png"
          alt="map"
          className="object-cover"
        />
      </div>
    </div>
  )
}