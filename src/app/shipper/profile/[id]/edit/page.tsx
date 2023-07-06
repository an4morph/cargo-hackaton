'use client'

import { BackButton } from '@/components/button/back'
import { PrimaryButton } from '@/components/button/primary'
import { BasicInput } from '@/components/input/base'
import { editShipperProfile } from '@/helpers/api'
import { useGetShipper } from '@/helpers/hooks/useGetShipper'
import { ShipperModel } from '@/types/models'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface IProps {
  params: {
    id: string
  }
}

const EditShipperPage = ({ params: { id } }: IProps): JSX.Element | null => {
  const { data, loading, error } = useGetShipper(id)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Partial<ShipperModel>>()

  useEffect(() => {
    if (data) {
      setValue('first_name', data.first_name)
      setValue('last_name', data.last_name)
      setValue('user', data.user)
    }
  }, [data, setValue])

  const onSubmit = (data: Partial<ShipperModel>) => {
    editShipperProfile(id, data)
  }

  if (!data) return null
  return (
    <div className="py-10 responsive">
      <BackButton text="Back to dashboard" href="/shipper/dashboard" />
      <h1 className="text-2xl font-bold mt-4 mb-6">Edit my profile</h1>
      <form className="paper p-4 w-full mx-auto">
        <BasicInput
          id="name"
          label="First name *"
          className="pb-4"
          {...register('first_name', {
            required: 'Required field',
          })}
          error={errors.first_name?.message}
        />
        <BasicInput
          id="last_name"
          label="Last name"
          className="pb-4"
          {...register('last_name')}
          error={errors.first_name?.message}
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