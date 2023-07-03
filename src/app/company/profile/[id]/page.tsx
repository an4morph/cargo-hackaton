import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  params: {
    id: string
  }
}

export default async function ProfileCompanyPage({ params: { id } }: IProps): Promise<JSX.Element> {
  return (
    <div className="responsive py-10">
      <div className="flex justify-between">
        <div className="flex w-1/2 gap-x-6">
          <Link href="/home/driver.jpg">
            <Image
              width="300"
              height="300"
              className="object-cover"
              alt="company avatar"
              src="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1689&q=80"
            />
          </Link>
          <div className="flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold">Go Cargo</h1>
              <span className="font-black text-green-800 mb-5">(Company)</span>
            </div>
            <div className="flex mt-8 gap-x-5">
              <h1 className="text-2xl font-bold bg-black text-white py-2 px-10 rounded-lg h-12">Message</h1>
              <h1 className="text-2xl font-bold bg-yellow-500 text-white py-2 px-10 rounded-lg h-12">Like</h1>
              <h1 className="text-2xl font-bold bg-blue-500 text-white py-2 px-10 rounded-lg h-12">Plan</h1>
              <h1 className="text-2xl font-bold bg-gray-500 text-white py-2 px-10 rounded-lg h-12">Autos</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-x-10">
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
      <hr className="my-5" />
      <div className="flex gap-x-5 items-center">
        <h1 className="my-4 text-3xl font-black text-black">
          {/* <SwiperDriver /> */}
        </h1>
        <div className="flex-col justify-evenly w-full">
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
            <table className="w-full border-collapse">
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
            </table>
          </div>
        </div>
      </div>
      <div />
    </div>
  )
}