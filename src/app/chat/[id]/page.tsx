import { BackButton } from '@/components/button/back'
import Image from 'next/image'

import { GiPlayButton } from 'react-icons/gi'

export default async function ChatPage(): Promise<JSX.Element> {
  return (
    <div className="responsive py-10">
      <BackButton />
      <div className="w-9/10 h-full rounded-md text-2xl font-bold bg-white p-4 rounded-lg h-16">
        <div className="w-full">
          <div className="flex gap-x-5 justify-start">
            <Image
              width="50"
              height="20"
              className="object-cover rounded-full"
              alt="chat avatar"
              src="https://images.unsplash.com/photo-1687360440361-1919309339e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            />
            <p className="text-left text-1xl font-normal w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, reiciendis.</p>
          </div>
          <div className="flex gap-x-5 justify-end">
            <Image
              width="50"
              height="20"
              className="object-cover rounded-full h-100"
              alt="chat avatar"
              src="https://images.unsplash.com/photo-1686503847976-22b349326c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            />
            <p className="text-left text-1xl font-normal w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, reiciendis.</p>
          </div>
        </div>
        <form className="flex w-full">
          <input type="text text-1xl font-normal placeholder:text-red-500" name="" id="" className="w-3/4 outline-none placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Send a message" />
          <button
            type="submit"
            ng-disabled="!input.message || input.message === ''"
          >
            <GiPlayButton />
          </button>
        </form>
      </div>
    </div>
  )
}