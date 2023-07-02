'use client'

import { ActiveLink } from '@/components/active-link'
import { PrimaryButton } from '@/components/button/primary'
import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const activeLink = 'text-2xl font-bold transition-all duration-300'
const inactiveLink = 'text-slate-500 hover:text-slate-900 transition-all duration-300'

const LoginLayout = ({ children }: IProps): JSX.Element => {
  const pathname = usePathname()

  return (
    <div className="responsive py-10">
      <div className="flex justify-center items-center h-[38px]">
        <Link
          href="/login"
          className={cx({
            [activeLink]: pathname.startsWith('/login'),
            [inactiveLink]: !pathname.startsWith('/login'),
          })}
        >
          Log in
        </Link>
        <div className="mx-4">/</div>
        <Link
          href="/signup"
          className={cx({
            [activeLink]: pathname.startsWith('/signup'),
            [inactiveLink]: !pathname.startsWith('/signup'),
          })}
        >
          Create an account
        </Link>
      </div>
      {children}
    </div>
  )
}

export default LoginLayout