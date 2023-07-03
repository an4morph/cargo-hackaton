import { PrimaryButton } from '@/components/button/primary'
import Image from 'next/image'
import Link from 'next/link'


export const Hero = (): JSX.Element => {
  return (
    <div className="h-[calc(100vh_-_56px)] bg-#edf0fe">
      <div className="responsive flex justify-between items-center h-full">
        <div className="w-1/2 flex-col ">
          <h1 className="text-4xl"><span className="font-bold">Fast</span> and <span className="font-bold">affordable</span> cargo transportation with us.</h1>
          <p className="my-10">We help and simplify the work with cargo transportation! more than 300 drivers are waiting for your order.</p>
          <Link href="/login">
            <PrimaryButton>Начать работу</PrimaryButton>
          </Link>
        </div>
        <div>
          <Image
            width="600"
            height="600"
            className="object-cover"
            alt="hero img"
            src="/home/truck.png"
          />
        </div>
      </div>
    </div>
  )
}