import cx from 'classnames'

interface IProps {
  className?: string
  address: string
}

export const DestinationInfo = ({ className, address }: IProps): JSX.Element => {
  return (
    <div className={cx(className,
      'font-medium flex flex-col w-[100px]',
      'bg-slate-100 px-4 py-2 rounded-lg'
    )}
    >
      <address
        className="not-italic text-sm text-ellipsis overflow-hidden"
        style={{
          width: '-webkit-fill-available',
        }}
      >{address}</address>
      <time className="text-2xl text-slate-500">12:03</time>
      <time>Sep 12</time>
    </div>
  )
}