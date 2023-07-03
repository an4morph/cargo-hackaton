'use client'
import cx from 'classnames'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

interface IProps {
  className?: string
  text?: string
  href?: string
}

interface IButtonProps {
  className?: string
  text: string
  onClick?: () => void
}

const Button = ({ className, text, onClick }: IButtonProps): JSX.Element => (
  <button
    onClick={onClick}
    className={cx(className,
      'flex items-center hover:text-black hover:bg-slate-200 py-1 px-2 rounded-lg',
      'transition-all'
    )}
  >
    <BsArrowLeft />
    <span className="text-sm ml-2">{text}</span>
  </button>
)

export const BackButton = ({ className, text = 'Go back', href }: IProps): JSX.Element => {
  const router = useRouter()
  return href
    ? (
      <Link
        href={href}
        className={cx(className, 'text-slate-500')}
      >
        <Button text={text} />
      </Link>
    )
    : (
      <Button className={className} onClick={() => router.back()} text={text} />
    )
}