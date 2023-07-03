'use client'

import { BackButton } from '@/components/button/back'
import { PrimaryButton } from '@/components/button/primary'
import { BasicInput } from '@/components/input/base'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'

interface IProps {
  params: {
    id: string
  }
}

interface ShipperProfileForm {
  name: string
  email: string
  location: string
  about: string
}

const EditShipperPage = ({ params: { id } }: IProps): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<ShipperProfileForm>()

  const onSubmit = (data: ShipperProfileForm) => {
    // eslint-disable-next-line
    console.log('data', id, data)
  }


  return (
    <div className="py-10 responsive">
      <BackButton text="Back to dashboard" href="/shipper/dashboard" />
      <h1 className="text-2xl font-bold mt-4 mb-6">Edit my profile</h1>
      <form className="paper p-4 w-full mx-auto">
        <BasicInput
          id="name"
          label="Full name"
          className="pb-4"
          {...register('name', {
            required: 'Required field',
          })}
          error={errors.name?.message}
        />
        <BasicInput
          id="email"
          label="Email"
          className="pb-4"
          {...register('email', {
            required: 'Required field',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email is incorrect, check it, please',
            },
          })}
          error={errors.email?.message}
        />
        <BasicInput
          id="location"
          label="Location"
          className="pb-4"
          {...register('location')}
          error={errors.location?.message}
        />
        <BasicInput
          id="location"
          label="Location"
          className="pb-4"
          {...register('location')}
          error={errors.location?.message}
        />
        <BasicInput
          id="location"
          label="Location"
          className="pb-4"
          {...register('location')}
          error={errors.location?.message}
        />
        <BasicInput
          id="location"
          label="Location"
          className="pb-4"
          {...register('location')}
          error={errors.location?.message}
        />
        <BasicInput
          id="location"
          label="Location"
          className="pb-4"
          {...register('location')}
          error={errors.location?.message}
        />
        <BasicInput
          id="location"
          label="Location"
          className="pb-4"
          {...register('location')}
          error={errors.location?.message}
        />
        <BasicInput
          id="location"
          label="Location"
          className="pb-4"
          {...register('location')}
          error={errors.location?.message}
        />

        <PrimaryButton
          className="mt-4 w-full"
          onClick={handleSubmit(onSubmit)}
        >
          Update Profile
        </PrimaryButton>
      </form>
    </div>
  )
}

export default dynamic(() => Promise.resolve(EditShipperPage), {
  ssr: false,
})