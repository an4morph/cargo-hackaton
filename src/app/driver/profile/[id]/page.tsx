// import SwiperDriver from '@/components/swiperDriver'
import { PrimaryButton } from '@/components/button/primary'
import Image from 'next/image'
import { MainInfo } from '@/components/mainInfo'
import { AboutInfo } from '@/components/aboutInfo'
import { ContactInfo } from '@/components/contactInfo'
import { TruckCharacteristic } from '@/components/truckCharacteristic'

interface IProps {
  params: {
    id: string
  }
}


export default async function ProfileDriverPage({ params: { id } }: IProps): Promise<JSX.Element> {
  return (
    <div className="responsive py-10">
      <div className="flex justify-between">
        <div className="flex w-2/3 gap-x-6">
          <Image
            width="200"
            height="200"
            className="object-cover"
            alt="driver avatar"
            src="/home/driver.jpg"
          />
          <div className="flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold"> Duglas Cameron</h1>
              <span className="font-black text-green-800 mb-5">(Driver)</span>
            </div>
            <div className="flex mt-8 gap-x-5 w-full">
              <PrimaryButton className="bg-gray-500 hover:bg-black">Message</PrimaryButton>
              <PrimaryButton className="bg-gray-500 hover:bg-black">Like</PrimaryButton>
              <PrimaryButton className="bg-gray-500 hover:bg-black">Plan</PrimaryButton>
              <PrimaryButton className="bg-gray-500 hover:bg-black">Truck Info</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="flex gap-x-10">
          <h1 className="text-3xl font-bold bg-black text-white p-4 rounded-lg h-16">Company Name</h1>
          <h1 className="text-3xl font-bold bg-green-800 text-white p-4 rounded-lg h-16">Free</h1>
        </div>
      </div>
      <div className="flex my-10 justify-evenly gap-x-5">
        <MainInfo />
        <AboutInfo />
        <ContactInfo />
      </div>
      {/* <div className="responsive">
        <TruckCharacteristic />
      </div> */}
      <div />
    </div>
  )
}