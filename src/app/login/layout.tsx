import { ReactNode } from 'react'

interface IProps {
  className?: string
  children?: ReactNode
}

const LoginLayout = ({ className, children }: IProps): JSX.Element => {
  return (
    <div className={className}>
      LoginLayout
      {children}
    </div>
  )
}

export default LoginLayout