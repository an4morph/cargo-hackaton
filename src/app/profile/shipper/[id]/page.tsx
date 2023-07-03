import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  params: {
    id: string
  }
}

export default async function ProfileShipperPage({ params: { id } }: IProps): Promise<JSX.Element> {
  return (
    <div className="responsive py-10">
      <div className="flex justify-between">
        <div className="flex w-1/2 gap-x-6">
          <Link href="/home/driver.jpg">
            <Image
              width="150"
              height="150"
              className="object-cover"
              alt="driver avatar"
              src="/home/shipper.jpg"
            />
          </Link>
          <div className="flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold">James Smith</h1>
              <span className="font-black text-green-800 mb-5">(Shipper)</span>
            </div>
            <div className="flex mt-8 gap-x-5">
              <h1 className="text-2xl font-bold bg-black text-white py-2 px-10 rounded-lg h-12">Message</h1>
              <h1 className="text-2xl font-bold bg-yellow-500 text-white py-2 px-10 rounded-lg h-12">Like</h1>
              <h1 className="text-2xl font-bold bg-blue-500 text-white py-2 px-10 rounded-lg h-12">Order</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-x-10">
          {/* <h1 className="text-3xl font-bold bg-black text-white p-4 rounded-lg h-16">Company Name</h1> */}
          <h1 className="text-3xl font-bold bg-green-800 text-white p-4 rounded-lg h-16">Free</h1>
        </div>
      </div>
      {/* <p>{id}</p> */}
      <hr className="my-5" />
      <div className="flex gap-x-5 items-center">
        <h1 className="my-4 text-9xl font-black text-gray-500 hover:text-black">01</h1>
        <div className="flex-col justify-evenly">
          <h2 className="text-3xl font-bold my-4">Main Info</h2>
          <div className="[&>p]:mb-4 text-1xl flex gap-x-10">
            <h4 className="text-2xl font-bold my-4">Location:<span className="font-normal"> Arizona</span></h4>
            <h4 className="text-2xl font-bold my-4">Orders:<span className="font-normal"> 23</span></h4>
            <h4 className="text-2xl font-bold my-4">Raiting:<span className="font-normal"> 67 <span className="font-bold">/</span> 100</span></h4>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex gap-x-5 items-center">
        <h1 className="my-4 text-9xl font-black text-gray-500 hover:text-black">02</h1>
        <div className="flex-col justify-evenly">
          <h2 className="text-3xl font-bold my-4">About</h2>
          <div className="[&>p]:mb-4 w-5/6 text-1xl">
            <p>Hello my name is Douglas I am a truck driver My experience of more than 7 years as a driver I am a driver of the company ****** I drive a KENWORTH W 900</p>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex gap-x-5 items-center">
        <h1 className="my-4 text-9xl font-black text-gray-500 hover:text-black">03</h1>
        <div className="flex-col justify-evenly">
          <h2 className="text-3xl font-bold my-4">Contact Info</h2>
          <div className="[&>p]:mb-4 w-5/6 flex gap-x-5">
            <Link href="tel:+15055464234" className="font-bold underline">
        +15055464234
            </Link>
            <Link href="tel:douglas.@gmail.com" className="font-bold underline">
        douglas.@gmail.com
            </Link>
            <Link href="tel:@douglasChicago" className="font-bold underline">
        @douglasChicago
            </Link>
          </div>
        </div>
      </div>
      <div />
    </div>
  )
}