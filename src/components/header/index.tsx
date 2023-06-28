import Link from 'next/link'
import { HeaderSidebar } from './sidebar'
import { links } from './links'

export const Header = (): JSX.Element => {
  return (
    <div className="bg-white shadow-sm">
      <div className="responsive py-4 flex justify-between items-center">
        <Link href="/">
          LOGO
        </Link>

        <div>
          <menu className="hidden md:flex">
            {
              links.map(({ id, text, href }) => (
                <li key={id} className="hover:text-gray-500 ml-10">
                  <Link href={href}>{text}</Link>
                </li>
              ))
            }
          </menu>
          <HeaderSidebar />
        </div>
      </div>
    </div>
  )
}