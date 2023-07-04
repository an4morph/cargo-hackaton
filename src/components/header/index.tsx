'use client'

import Link from 'next/link'
import { HeaderSidebar } from './sidebar'
import { Logo } from '@/components/logo'
import { BiLogOut } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { IconButton } from '../button/icon'
import { ForwardedRef, forwardRef } from 'react'

export const Header = forwardRef((props, ref): JSX.Element => {
  const isLogged = false
  const handleLogOut = () => {
    localStorage.removeItem('token')
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
                        href="/shipper/profile/id/edit"
                        className="border-[1px] border-slate-300 py-1 px-3 rounded-full flex items-center"
                      >
                        <FaUserCircle className="mr-2" />
                        User name
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
})