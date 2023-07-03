import Link from 'next/link'
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { links } from '@/components/header/links'

const social = [
  {
    link: 'https://www.instagram.com/',
    icon: AiFillInstagram,
  },
  {
    link: 'https://ru-ru.facebook.com/',
    icon: AiFillFacebook,
  },
  {
    link: 'https://twitter.com/home',
    icon: AiFillTwitterCircle,
  },
]

export const Footer = (): JSX.Element => {
  return (
    <div className="bg-white shadow-sm py-10">
      <div className="responsive py-4 flex justify-between items-center">
        <div>
          <Link href="/">
          LOGO
          </Link>
          <h1 className="text-2xl pt-5"><span className="font-bold">Fast</span> and <span className="font-bold">affordable</span><br />cargo transportation<br />with us.</h1>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-1xl font-black justify-start">Pages</h3>
          <menu className="flex flex-col mt-5 text-start">
            {
              links.map(({ id, text, href }) => (
                <li key={id} className="hover:text-gray-500 text-start">
                  <Link href={href}>{text}</Link>
                </li>
              ))
            }
          </menu>
          {/* <HeaderSidebar /> */}
        </div>
        <div className="flex-col ">
          <h3 className="text-1xl font-black">Messengers</h3>
          <div className="flex justify-between w-1/2 gap-x-5 mt-5">
            {
              social.map(({ link, icon: Icon }) => (
                <Link
                  key={link}
                  href={link}
                >
                  <Icon className="w-[24px] h-[24px] hover:text-slate-500 transition-all" />
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}