'use client'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { IconButton } from '../button/icon'
import { AiOutlineMenu } from 'react-icons/ai'
import { Sidebar } from '../sidebar'
import Link from 'next/link'
import { links } from './links'


interface IProps {
  className?: string
}

export const HeaderSidebar = ({ className }: IProps): JSX.Element => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const onClose = () => setSidebarOpen(false)

  return (
    <div className={className}>
      <IconButton
        className="ml-10 flex md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <AiOutlineMenu />
      </IconButton>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={onClose}
        className="p-4"
      >
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-400 pl-4">Меню</h3>
          <IconButton onClick={onClose}>
            <IoCloseOutline />
          </IconButton>
        </div>

        <menu className="flex flex-col mt-4">
          {
            links.map(({ id, text, href }) => (
              <li key={id} onClick={onClose} className="w-full">
                <Link
                  className="hover:bg-slate-100 p-4 border-b-[1px] flex cursor-pointer w-full"
                  href={href}
                >
                  {text}
                </Link>
              </li>
            ))
          }
        </menu>
      </Sidebar>
    </div>
  )
}