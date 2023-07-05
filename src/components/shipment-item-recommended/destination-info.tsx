import cx from 'classnames'

interface IProps {
  className?: string
  address: string
}

export const DestinationInfo = ({ className, address }: IProps): JSX.Element => {
  return (
    <div className={cx(className,
      'font-medium flex flex-col justify-center items-center bg-slate-100 px-4 py-2 rounded-lg'
    )}
    >
      <address className="not-italic text-sm ">{address}</address>
      <time className="text-2xl text-slate-500 ">12:03</time>
      <time>Sep 12</time>
    </div>
  )
}