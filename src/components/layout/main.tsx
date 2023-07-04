'use client'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { useSizes } from '@/helpers/hooks/useSizes'
import { ReactNode, useMemo, useRef } from 'react'

interface IProps {
  children: ReactNode
}
export const MainLayout = ({ children }: IProps): JSX.Element => {
  const footerRef = useRef<HTMLElement>()
  const headerRef = useRef<HTMLElement>()

  const sizes: any = useSizes({
    footer: footerRef,
    header: headerRef,
  })
  const minHeight = useMemo(() => {
    const hh = sizes.header.height
    const fh = sizes.footer.height
    return `calc(100vh - ${fh + hh || 316}px)`
  }, [sizes])

  return (
    <>
      <Header ref={headerRef} />
      <div style={{ minHeight }}>
        {children}
      </div>
      <Footer ref={footerRef} />
    </>
  )
}
