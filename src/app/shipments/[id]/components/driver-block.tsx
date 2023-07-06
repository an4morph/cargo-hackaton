import { PrimaryButton } from '@/components/button/primary'
import { SecondaryButton } from '@/components/button/secondary'
import cx from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  className?: string
}

export const DriverBlock = ({ className }: IProps): JSX.Element => {
  return (
    <div className={cx(className, 'w-1/5 min-w-[20%] paper p-4 ml-6')}>
      <h2 className="text-xl mb-4">Your Carrier</h2>
      <div className="w-full aspect-square rounded-full relative overflow-hidden">
        <Image
          fill
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=989&q=80"
          alt="driver"
          className="object-cover"
        />
      </div>

      <div className="mb-1 mt-2">
        <span className="font-bold">Name:</span>
            &nbsp;Steve Clark
      </div>
      <div className="mb-1">
        <span className="font-bold">Cargo:</span>
            &nbsp;Super Delivery
      </div>
      <p>Lorem, ipsum dolor sit amet Magni voluptate quod vel! Provident, molestias ipsa?</p>
      <Link className="mt-4 block" href="/profile/driver/1">
        <PrimaryButton className="w-full">More Info</PrimaryButton>
      </Link>
      <Link className="mt-4 block" href="/chat/1">
        <SecondaryButton className="w-full">Message</SecondaryButton>
      </Link>
    </div>
  )
}