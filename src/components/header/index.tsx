'use client'

import Link from 'next/link'
import { HeaderSidebar } from './sidebar'
import { Logo } from '@/components/logo'
import { BiLogOut } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { IconButton } from '../button/icon'
import { ForwardedRef, forwardRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { observer } from 'mobx-react-lite'

export const Header = observer(forwardRef((props, ref): JSX.Element => {
  const pathname = usePathname()

  const isLogged = !['/login', '/signup', '/'].includes(pathname)


  const router = useRouter()
  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('userRole')
    localStorage.removeItem('notify')
    router.push('/login')
  }
  return (
    <header className="bg-white shadow-sm" ref={ref as ForwardedRef<HTMLElement>}>
      <div className="responsive py-4 flex justify-between items-center">
        <Logo />

        <div>
          <menu className="hidden md:flex items-center">
            <li className="hover:text-gray-500 ml-10">
              <Link href="/news">News</Link>
            </li>
            <li className="hover:text-gray-500 ml-10">
              <Link href="/about">About us</Link>
            </li>
            {
              isLogged
                ? (
                  <>
                    <li className="hover:text-gray-500 ml-10">
                      <Link
                        href={`/shipper/profile/${localStorage.getItem('userId')}/edit`}
                        className="border-[1px] border-slate-300 py-1 px-3 rounded-full flex items-center"
                      >
                        <FaUserCircle className="mr-2" />
                        Profile
                      </Link>
                    </li>
                    <li className="hover:text-gray-500 ml-2">
                      <IconButton onClick={handleLogOut}>
                        <BiLogOut />
                      </IconButton>
                    </li>
                  </>
                ) : (
                  <li className="hover:text-gray-500 ml-10">
                    <Link href="/login">Log in</Link>
                  </li>
                )
            }
          </menu>
          <HeaderSidebar />
        </div>
      </div>
    </header>
  )
}))