import Link from 'next/link'

export const Logo = (): JSX.Element => {
  return (
    <Link href="/" className="font-bold uppercase">
      <span className="text-sky-600 text-lg">C</span>
      <span>argo</span>
      <span className="text-sky-600 text-lg">C</span>
      <span>ode</span>
    </Link>
  )
}