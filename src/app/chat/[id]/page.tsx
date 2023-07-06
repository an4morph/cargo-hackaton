import { BackButton } from '@/components/button/back'
import Image from 'next/image'

import { GiEarthAsiaOceania, GiPlayButton } from 'react-icons/gi'
import { BsFillCalendarCheckFill, BsFillCalendarEventFill } from 'react-icons/bs'
import { TiLocation } from 'react-icons/ti'


export default async function ChatPage(): Promise<JSX.Element> {
  return (
    <div className="responsive py-10">
      <BackButton />
      <div className="flex my-10 gap-x-5">
        <div className="w-2/6">
          <div className="flex gap-x-5">
            <Image
              width="50"
              height="50"
              className="object-cover rounded-full self-start"
              alt="driver avatar"
              src="/home/avatarMask.png"
            />
            <div>
              <h2 className="text-blue-500">Charles Oliveira</h2>
              <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quos ad, voluptatum soluta sapiente magnam!</p>
            </div>
          </div>
          <ul className="border border-slate-300 rounded-md py-4 pl-9 pr-3 shadow-sm mt-5 flex-col">
            <li className="flex gap-x-2 items-center">
              <GiEarthAsiaOceania />
              <p className="font-semibold">from :</p>
              <p className="text-blue-500"> New York</p>
            </li>
            <li className="flex gap-x-2 items-center mt-1">
              <TiLocation />
              <p className="font-semibold">to :</p>
              <p className="text-blue-500"> Miami</p>
            </li>
            <li className="flex gap-x-2 items-center mt-1">
              <BsFillCalendarEventFill />
              <p className="font-semibold">since :</p>
              <p className="text-blue-500"> 13 Sep</p>
            </li>
            <li className="flex gap-x-2 items-center mt-1">
              <BsFillCalendarCheckFill />
              <p className="font-semibold">until :</p>
              <p className="text-blue-500"> 23 Sep</p>
            </li>
          </ul>
        </div>
        <div className="flex-col w-4/6 rounded-md text-2xl font-bold bg-white p-4 rounded-lg h-500 justify-end">
          <div className="outline-none h-3/4 mb-5 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm">
            <p className="text-slate-400 text-1xl h-full w-full flex items-end justify-end">
            .....
            </p>
          </div>
          <form className="flex w-full">
            <input type="text text-1xl font-normal placeholder:text-red-500" name="" id="" className="w-3/4 outline-none placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Send a message" />
            <button
              type="submit"
              ng-disabled="!input.message || input.message === ''"
            >
              <GiPlayButton size="44" fill="blue" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}