import { ShipmentStatuses } from '@/types/base.d'
import cx from 'classnames'
import Link from 'next/link'
import { DestinationInfo } from '@/components/destination-info'
import { SecondaryButton } from '@/components/button/secondary'
import { StatusBox } from './status'
import { useMemo } from 'react'

interface IProps {
  className?: string
  status: ShipmentStatuses
  id: string | number
  fromDate: string,
  toDate: string,
  locationFrom: string,
  locationTo: string,
  wayPercentage?: number,
  description: string,
  driverId?: string | number
  weight?: string | number
  owner?: string | number
}

export const ShipmentItem = ({
  className,
  status,
  id,
  fromDate,
  toDate,
  locationFrom,
  locationTo,
  description,
  driverId,
  weight,
  owner,
}: IProps): JSX.Element => {
  const percent = useMemo(() => {
    if (status === ShipmentStatuses.wait || status === ShipmentStatuses.load) return 0
    if (status === ShipmentStatuses.done) return 100
    else return 35
  }, [status])
  return (
    <div
      className={cx(
        className,
        'w-full paper border-[1px] border-slate-300 p-6 mb-2',
      )}
    >
      <StatusBox status={status} className="mb-4 inline-block" />
      <div className="flex justify-between">
        <DestinationInfo date={fromDate} address={locationFrom} />
        <input
          className="w-3/5 text-white bg-black"
          type="range"
          min="0"
          value={percent}
          max="100"
        />
        <DestinationInfo date={toDate} address={locationTo} />
      </div>
      <hr className="mt-4" />

      <div className="flex mt-6 justify-between">
        <table className="text-sm">
          <tbody>
            <tr>
              <td className="font-bold align-top pr-4">Description</td>
              <td className="text-slate-500 align-top break-all">{description}</td>
            </tr>
            {
              (driverId && localStorage.getItem('userRole') !== 'driver') && (
                <tr>
                  <td className="font-bold align-top pr-4">Driver Info</td>
                  <td className="text-slate-500 align-top">
                    <Link
                      className="underline text-sky-700 hover:text-sky-500"
                      href={`/driver/profile/${driverId}`}
                    >Show driver info</Link>
                  </td>
                </tr>
              )
            }
            {
              (owner && localStorage.getItem('userRole') !== 'shipper') && (
                <tr>
                  <td className="font-bold align-top pr-4">Shipper Info</td>
                  <td className="text-slate-500 align-top">
                    <Link
                      className="underline text-sky-700 hover:text-sky-500"
                      href={`/shipper/profile/${owner}`}
                    >Show shipper info</Link>
                  </td>
                </tr>
              )
            }
            {
              weight && (
                <tr>
                  <td className="font-bold align-top pr-4">Weight</td>
                  <td className="text-slate-500 align-top">{weight}</td>
                </tr>
              )
            }
          </tbody>
        </table>

        <Link href={`/shipments/${id}`} className="block shrink-0 ml-4 self-end">
          <SecondaryButton className="!bg-sky-700 text-white !hover:bg-sky-500 border-none">
            More Info
          </SecondaryButton>
        </Link>
      </div>
    </div>
  )
}