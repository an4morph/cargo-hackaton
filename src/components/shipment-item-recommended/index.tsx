import { ShipmentStatuses } from '@/types/base'
import cx from 'classnames'
import Link from 'next/link'
import { DestinationInfo } from './destination-info'
import { SecondaryButton } from '../button/secondary'
import { BsArrowRight } from 'react-icons/bs'

interface IProps {
  className?: string
  status: ShipmentStatuses
  id: string | number
  fromDate: string,
  toDate: string,
  locationFrom: string,
  locationTo: string,
  description: string,
  driverId?: string | number
  weight?: string | number
}

export const ShipmentItemRecommended = ({
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
}: IProps): JSX.Element => {
  return (
    <div
      className={cx(
        className,
        'paper border-[1px] border-slate-300 p-6 flex flex-col',
      )}
    >
      <div className="flex justify-between items-center">
        <DestinationInfo address={locationFrom} />
        <BsArrowRight className="w-[40px] h-[40px]" />
        <DestinationInfo address={locationTo} />
      </div>
      <hr className="mt-4" />

      <table className="text-sm grow mt-4">
        <tbody>
          <tr>
            <td className="font-bold align-top pr-4">Description</td>
            <td className="text-slate-500 align-top">{description}</td>
          </tr>
          {
            driverId && (
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
            weight && (
              <tr>
                <td className="font-bold align-top pr-4">Weight</td>
                <td className="text-slate-500 align-top">{weight}</td>
              </tr>
            )
          }
        </tbody>
      </table>

      <div className="">
        <SecondaryButton className="!bg-sky-700 !text-white !hover:bg-sky-500 border-none w-full mt-5">
          Take Order
        </SecondaryButton>
        <Link href={`/shipments/${id}`} className="block mt-2">
          <SecondaryButton className="w-full mt-">
            More Info
          </SecondaryButton>
        </Link>
      </div>
    </div>
  )
}