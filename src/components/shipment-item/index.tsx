import { ShipmentStatuses } from '@/types/base'
import cx from 'classnames'
import Link from 'next/link'
import { DestinationInfo } from './destination-info'
import { SecondaryButton } from '../button/secondary'
import { StatusBox } from './status'

interface IProps {
  className?: string
  status: ShipmentStatuses
  id: string | number
  fromDate: string,
  toDate: string,
  locationFrom: string,
  locationTo: string,
  wayPercentage: number,
  description: string,
  driverInfo: string
}

export const ShipmentItem = ({
  className,
  status,
  id,
  fromDate,
  toDate,
  locationFrom,
  locationTo,
  wayPercentage,
  description,
  driverInfo,
}: IProps): JSX.Element => {
  return (
    <div
      className={cx(
        className,
        'w-full paper border-[1px] border-slate-300 p-6 mb-2',
      )}
    >
      <StatusBox status={status} className="mb-4 inline-block" />
      <div className="flex justify-between">
        <DestinationInfo address={locationFrom} />
        <input
          className="w-3/5 text-white bg-black"
          type="range"
          min="0"
          value={wayPercentage}
          max="100"
        />
        <DestinationInfo address={locationTo} />
      </div>
      <hr className="mt-4" />

      <div className="flex mt-6 justify-between">
        <table className="text-sm">
          <tbody>
            <tr>
              <td className="font-bold align-top pr-4">Description</td>
              <td className="text-slate-500">{description}</td>
            </tr>
            <tr>
              <td className="font-bold align-top pr-4">Driver Info</td>
              <td className="text-slate-500">{driverInfo}</td>
            </tr>
          </tbody>
        </table>

        <Link href={`/shipments/${id}`} className="block shrink-0 ml-4 self-end">
          <SecondaryButton className="bg-sky-700 text-white hover:bg-sky-500 border-none">
            More Info
          </SecondaryButton>
        </Link>
      </div>
    </div>
  )
}