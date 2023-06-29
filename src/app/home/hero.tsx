import { PrimaryButton } from '@/components/button/primary'
import Link from 'next/link'

export const Hero = (): JSX.Element => {
  return (
    <div className="h-[calc(100vh_-_56px)] bg-sky-200">
      <div className="responsive flex justify-between items-center h-full">
        <div className="w-1/2 h-[300px] bg-slate-700 text-white flex justify-center items-center">тут картинка например</div>

        <div>
          <h1 className="text-3xl">Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia eius ut est dignissimos veritatis, quis vero sapiente sint, officia eligendi at natus sunt accusamus!</p>
          <Link href="/login">
            <PrimaryButton>Начать работу</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  )
}