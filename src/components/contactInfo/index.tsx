import React from 'react'
import { BsTelephoneOutboundFill, BsTelegram } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import Link from 'next/link'


const social = [
  {
    link: 'tel:+15055464234',
    icon: BsTelephoneOutboundFill,
    text: '+15055464234',
  },
  {
    link: 'douglas@gmail.com',
    icon: SiGmail,
    text: 'douglas@gmail.com',
  },
  {
    link: '@douglasChickago',
    icon: BsTelegram,
    text: '@douglasChickago',
  },
]

export const ContactInfo = () => {
  return (
    <div className="flex-col w-1/3 items-center bg-white p-10 rounded-xl">
      <h2 className="text-3xl font-bold my-4">Contact Info</h2>
      <div className="flex-col gap-y-5">
        {
          social.map(({ link, icon: Icon, text }) => (
            <Link
              key={link}
              href={link}
              className="flex mt-4 gap-x-2"
            >
              <Icon className="w-[22px] h-[22px] hover:text-slate-500 transition-all" />
              {text}
            </Link>
          ))
        }
      </div>
    </div>
  )
}
